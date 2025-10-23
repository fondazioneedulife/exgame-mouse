import Router from "@koa/router";
import { examsMiddleware, validateSubscription } from "../middlewares/exams";
import { exams } from "../mocks/exams";
import { subscriptions } from "../mocks/subscriptions";

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

router.post("/new", examsMiddleware, validateSubscription, (ctx) => {
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
