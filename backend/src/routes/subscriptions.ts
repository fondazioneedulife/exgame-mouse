import Router from "@koa/router";
import { subscriptions } from "../mocks/subscriptions";
import { examsMiddleware, validateExamAnswersMiddleware } from "../middlewares/exams";

const router = new Router({
  prefix: "/api/subscriptions",
});

router.get("/", (ctx) => {
  ctx.status = 200;
  ctx.body = subscriptions;
});

router.get("/:id", (ctx) => {
  const { id } = ctx.params;
  const subscription = subscriptions.find(
    (subscription) => subscription._id === id,
  );

  if (!subscription) {
    ctx.status = 404;
    ctx.body = { error: `Sottoscrizione con id ${id} non trovata` };
    return;
  }

  ctx.status = 200;
  ctx.body = subscription;
});

router.post("/new", examsMiddleware, (ctx) => {
  try {
    const newSubscription = { ...ctx.request.body };

    if (
      !newSubscription ||
      !newSubscription.exam_id ||
      !newSubscription.student_id
    ) {
      ctx.status = 400;
      ctx.body = { error: "Parametri mancanti" };
      return;
    }

    subscriptions.push(newSubscription);
    ctx.status = 201;
    ctx.body = newSubscription;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: "Errore durante la creazione della sottoscrizione" };
  }
});

router.put("/:id", (ctx) => {
  const { id } = ctx.params;
  const index = subscriptions.findIndex(
    (subscription) => subscription._id === id,
  );

  if (index === -1) {
    ctx.status = 404;
    ctx.body = { error: "Sottoscrizione non trovata!" };
    return;
  }

  try {
    const updatedSubscription = {
      ...subscriptions[index],
      ...ctx.request.body,
    };
    subscriptions[index] = updatedSubscription;

    ctx.status = 202;
    ctx.body = updatedSubscription;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: "Errore durante l'aggiornamento" };
  }
});

router.delete("/:id", (ctx) => {
  const { id } = ctx.params;
  const index = subscriptions.findIndex(
    (subscription) => subscription._id === id,
  );

  if (index === -1) {
    ctx.status = 404;
    ctx.body = { error: "Sottoscrizione non trovata!" };
    return;
  }

  subscriptions.splice(index, 1);

  ctx.status = 204;
  ctx.body = null;
});

router.post("/new", examsMiddleware, validateExamAnswersMiddleware, (ctx) => {
  try {
    const newSubscription = { ...ctx.request.body };

    subscriptions.push(newSubscription);

    ctx.status = 201;
    ctx.body = newSubscription;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: "Errore durante la creazione della sottoscrizione" };
  }
});

export default router;
