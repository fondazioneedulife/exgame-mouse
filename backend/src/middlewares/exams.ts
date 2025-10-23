import { Context, Next } from "koa";
import { subscriptions } from "../mocks/subscriptions";
import { exams } from "../mocks/exams";

export const examsMiddleware = async (ctx: Context, next: Next) => {
  const { exam_id, student_id } = ctx.request.body;

  if (!exam_id) {
    ctx.status = 400;
    ctx.body = { error: "Parametro 'exam_id' mancante" };
    return;
  }

  if (!student_id) {
    ctx.status = 400;
    ctx.body = { error: "Parametro 'student_id' mancante" };
    return;
  }

  // Controlla se lo studente ha già registrato l'esame
  const studentYetRegistered = subscriptions.some(
    (sub) => sub.exam_id === exam_id && sub.student_id === student_id,
  );

  if (studentYetRegistered) {
    ctx.status = 400;
    ctx.body = { error: "Esame già registrato da questo studente" };
    return;
  }

  await next();
};

// Verifica che l’esame, le domande e le risposte siano validi
export const validateExamAnswersMiddleware = async (ctx: Context, next: Next) => {
  const { exam_id, questions } = ctx.request.body;

  // Controlla che l'esame esista
  const exam = exams.find((e) => e._id === exam_id);
  if (!exam) {
    ctx.status = 404;
    ctx.body = { error: `Esame con id '${exam_id}' non trovato.` };
    return;
  }

  // Controlla che siano state inviate domande
  if (!Array.isArray(questions) || questions.length === 0) {
    ctx.status = 400;
    ctx.body = { error: "Nessuna domanda inviata." };
    return;
  }

  // Verifica ogni domanda e risposta
  for (const q of questions) {
    const examQuestion = exam.questions.find(
      (question) => question._id === q.question_id,
    );

    if (!examQuestion) {
      ctx.status = 400;
      ctx.body = { error: `Domanda con id '${q.question_id}' non trovata nell'esame.` };
      return;
    }

    const validAnswer = examQuestion.answers.find(
      (ans) => ans._id === q.answer_id,
    );

    if (!validAnswer) {
      ctx.status = 400;
      ctx.body = {
        error: `Risposta '${q.answer_id}' non valida per la domanda '${q.question_id}'.`,
      };
      return;
    }
  }

  // Tutto valido → passa al prossimo middleware o controller
  await next();
};
