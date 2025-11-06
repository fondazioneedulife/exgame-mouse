import Router from "@koa/router";
import { examsMiddleware, validateSubscription } from "../middlewares/exams";
import { subscriptions } from "../mocks/subscriptions";
import SubsctiptionsDao from "../dao/subscriptionsdao";
import ExamsDao from "../dao/examsdao";

const router = new Router({
  prefix: "/api/subscriptions",
});

const subscriptionsdao = new SubsctiptionsDao();

const examsdao = new ExamsDao();

//ROUTES
router.get("/", async (ctx) => {
  const result = await subscriptionsdao.getAll();
  ctx.status = 200;
  ctx.body = result;
});

router.get("/:id", async (ctx) => {
  const { id } = ctx.params;
  const subscription = await subscriptionsdao.getSubscription(id);

  if (!subscription) {
    ctx.status = 404;
    ctx.body = { error: `Sottoscrizione con id ${id} non trovata` };
    return;
  }

  ctx.status = 200;
  ctx.body = subscription;
});

router.post("/new", examsMiddleware, validateSubscription, async (ctx) => {
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

    const subscriptionsUpdated = await subscriptionsdao.addSub(newSubscription);
    ctx.status = 201;
    ctx.body = newSubscription;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: "Errore durante la creazione della sottoscrizione" };
  }
});

router.post("/:id/calc", async (ctx) => {
  const { id } = ctx.params;
  const subscription = await subscriptionsdao.getSubscription(id);

  const exam = await examsdao.getById(id);

  let count = 0;
  if (subscription?.questions) {
    for (const studentQuestion of subscription?.questions) {
      const examQuestion = exam?.questions.find(
        (q) => q._id === studentQuestion.question_id,
      );

      if (!examQuestion) {
        continue;
      }

      for (const studentAnswer of studentQuestion.responses) {
        const answerQuestion = examQuestion.answers.find(
          (a) => a._id === studentAnswer.answer_id,
        );
        if (answerQuestion && answerQuestion.is_correct) {
          count++;
        }
      }
    }

    const totalQuestions = exam?.questions.length || 0;
    const finalGrade = ((count / totalQuestions) * 10).toFixed(1);

    ctx.status = 200;
    ctx.body = finalGrade;
  }
});

router.put("/:id", async (ctx) => {
  const { id } = ctx.params;
  const index = subscriptions.findIndex(
    (subscription) => subscription._id === id,
  );

  if (index === null) {
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

router.delete("/:id", async (ctx) => {
  const { id } = ctx.params;
  const index = subscriptions.findIndex(
    (subscription) => subscription._id === id,
  );

  if (index === -1) {
    ctx.status = 404;
    ctx.body = { error: "Sottoscrizione non trovata!" };
    return;
  }
  
  subscriptionsdao.deleteSub(index);

  ctx.status = 204;
  ctx.body = null;
});

export default router;
