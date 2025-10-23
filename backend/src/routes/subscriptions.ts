import Router from "@koa/router";
import { subscriptions } from "../mocks/subscriptions";
import { examsMiddleware } from "../middlewares/exams";
import { questions } from "../mocks/questions";

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

router.post("/:id/calc", ctx => {
  const submitted = ctx.request.body;
  
  let points = 0;

  for (const question of submitted.questions) {
    for (const response of question.responses) {
      for (const q of questions) {
        const isCorrect = q.answers.find(
          (ans: any) => ans._id === response.answer_id,
        )?.is_correct;
        if (isCorrect) {
          points += 1;
        }
      }
    }
  }

  const result = (points / submitted.questions.length * 10).toFixed(1);

  console.log(submitted.questions.length, points, result);
  
  ctx.body = { grade: result };
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

export default router;
