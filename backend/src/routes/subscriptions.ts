import Router from "@koa/router";
import { subscriptions } from "../mocks/subscriptions";
import { examsMiddleware, validateSubscription } from "../middlewares/exams";
import { exams } from "../mocks/exams";
import SubscriptionsDao from "../dao/subscriptions.dao";


const router = new Router({
  prefix: "/api/subscriptions",
});

const subscriptionsDao = new SubscriptionsDao();

router.get("/", async (ctx) => {
  ctx.status = 200;
  ctx.body = await subscriptionsDao.getAll();
});

router.get("/:id", async (ctx) => {
  const { id } = ctx.params;
  const subscription = await subscriptionsDao.getById(id).then((subscription) => {
    return subscription;
  });

  if (!subscription) {
    ctx.status = 404;
    ctx.body = { error: `Sottoscrizione con id ${id} non trovata` };
    return;
  }

  ctx.status = 200;
  ctx.body = subscription;
});

router.post("/new", examsMiddleware, validateSubscription, (ctx) => {
  try {
    const newSubscription = { ...ctx.request.body };
    const createdSubscription = subscriptionsDao.create(newSubscription);

    if (
      !newSubscription ||
      !newSubscription.exam_id ||
      !newSubscription.student_id
    ) {
      ctx.status = 400;
      ctx.body = { error: "Parametri mancanti" };
      return;
    }
    ctx.status = 201;
    ctx.body = createdSubscription
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: "Errore durante la creazione della sottoscrizione" };
  }
});

router.post("/:id/calc", (ctx) => {
  const { id } = ctx.params;
  const subscription = subscriptions.find((s) => s._id === id);

  const exam = exams.find((e) => e._id === subscription?.exam_id);

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
try {
  const index = await subscriptionsDao.getById(id);
  if (!index) {
    ctx.status = 404;
    ctx.body = { error: "Sottoscrizione non trovata!" };
    return;
  }
  const updatedSubscription = await subscriptionsDao.update(id, ctx.request.body);

    ctx.status = 202;
    ctx.body = updatedSubscription;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: "Errore durante l'aggiornamento" };
  }
});

router.delete("/:id", async (ctx) => {
  const { id } = ctx.params;

  try {
    const subscription = await subscriptionsDao.getById(id);
    if (!subscription) {
      ctx.status = 404;
      ctx.body = { error: "Sottoscrizione non trovata!" };
      return;
    }

    await subscriptionsDao.delete(id);

    const deletedSubscription = subscription;
    ctx.status = 200;
    ctx.body = { message: "Sottoscrizione eliminata!", subscription: deletedSubscription };
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: "Errore durante l'eliminazione" };
  }
});

export default router;
