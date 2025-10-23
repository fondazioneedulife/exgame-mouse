import Router from "@koa/router";
import { subscriptions } from "../mocks/subscriptions";
import { examsMiddleware } from "../middlewares/exams";
import { exams } from "../mocks/exams";

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

router.post("/:id/calc", (ctx) => {
  const { id } = ctx.params;
  const subscription = subscriptions.find((sub) => sub._id === id);

  if (!subscription) {
    ctx.status = 404;
    ctx.body = { error: `Subscription with id ${id} not found` };
    return;
  }

  const exam = exams.find((e) => e._id === subscription.exam_id);
  if (!exam) {
    ctx.status = 404;
    ctx.body = { error: `Exam with id ${subscription.exam_id} not found` };
    return;
  }

  if (!subscription.questions || !Array.isArray(subscription.questions)) {
    ctx.status = 400;
    ctx.body = { error: "No answered questions found in subscription" };
    return;
  }

  let correctAnswers = 0;
  const totalQuestions = exam.questions.length;

  // Ciclo tutte le domande a cui lo studente ha risposto
  for (const studentQuestion of subscription.questions) {
    const examQuestion = exam.questions.find(
      (q) => q._id === studentQuestion.question_id
    );
    if (!examQuestion) continue;

    // Ciclo le risposte fornite dallo studente
    for (const response of studentQuestion.responses) {
      const correctAnswer = examQuestion.answers.find(
        (a) => a._id === response.answer_id && a.is_correct === true
      );
      if (correctAnswer) {
        correctAnswers++;
      }
    }
  }

  const grade = Number(((correctAnswers / totalQuestions) * 10).toFixed(1));

  subscription.status = "completed";
  subscription.grade = grade;

  ctx.status = 200;
  ctx.body = {
    messege: "Voto calcolato con successo",
    correctAnswers,
    totalQuestions,
    grade,
  };

});

export default router;
