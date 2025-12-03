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

export const validateSubscription = async (ctx: Context, next: Next) => {
  const { exam_id, questions: submittedQuestions } = ctx.request.body;

  // Validazione base della richiesta
  if (!exam_id || !Array.isArray(submittedQuestions)) {
    ctx.status = 400;
    ctx.body = { error: "Richiesta non valida." };
    return;
  }

  // Trova l'esame corrispondente all'ID
  const exam = exams.find((e) => e.id === exam_id);
  if (!exam) {
    ctx.status = 404;
    ctx.body = { error: "Esame non trovato." };
    return;
  }

  // Array per tenere traccia di errori
  const invalidQuestionIds = [];
  const invalidAnswerEntries = [];

  // Verifica ogni domanda inviata dallo studente
  for (const studentQuestion of submittedQuestions) {
    const examQuestion = exam.questions.find(
      (q) => q.id === studentQuestion.question_id,
    );

    // La domanda non appartiene all'esame → errore
    if (!examQuestion) {
      invalidQuestionIds.push(studentQuestion.question_id);
      continue;
    }

    // Se ci sono risposte inviate, verifica la validità
    if (Array.isArray(studentQuestion.responses)) {
      const invalidAnswers = studentQuestion.responses
        .filter(
          (response: any) =>
            !examQuestion.answers.some((a) => a.id === response.answer_id),
        )
        .map((response: any) => response.answer_id);

      if (invalidAnswers.length > 0) {
        invalidAnswerEntries.push({
          question_id: studentQuestion.question_id,
          invalidAnswers,
        });
      }
    }
  }

  // Se ci sono errori blocca la richiesta e segnala gli errori
  if (invalidQuestionIds.length > 0 || invalidAnswerEntries.length > 0) {
    ctx.status = 400;
    ctx.body = {
      error: "Dati delle domande non validi.",
      invalidQuestionIds,
      invalidAnswerEntries,
    };
    return;
  }

  await next();
};
