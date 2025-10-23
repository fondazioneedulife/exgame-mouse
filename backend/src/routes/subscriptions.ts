import Router from "@koa/router";
import { subscriptions } from "../mocks/subscriptions";
import { examsMiddleware } from "../middlewares/exams";
import {questions} from "../mocks/questions"
import { error } from "console";

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



// Calcolo del punteggio finale
router.post("/:id/calc", (ctx) => {
  const { id } = ctx.params;

  //trova la subscription
  const subscription = subscriptions.find((sub) => sub._id === id)
  if (!subscription) {
    ctx.status = 404
    ctx.body = {error: `Sottoscrizione con ${id} non trovata`}
    return
  }

  const studentQuestions = subscription.questions
  let correctAnswers = 0

  //cicla le domande dello studente
  studentQuestions.forEach((studentQuestion) => {
    const question = questions.find((q) => q._id === studentQuestion.question_id)
    if (!question) return

  //controllo se la risposat è corretta
  studentQuestion.responses.forEach((response: { answer_id: any; }) => {
    const answer = question.answers.find((a: { _id: any; }) => a._id === response.answer_id)
    if (answer && answer.is_correct) {
      correctAnswers++
    }
  })
})

  const totalQuestions = studentQuestions.length;
  const grade = ((correctAnswers / totalQuestions) * 10).toFixed(1)

  ctx.status = 200
  ctx.body = {
    message: "Calcolo completato con successo",
    correctAnswers,
    totalQuestions,
    grade: subscription.grade
  }
})

export default router;
