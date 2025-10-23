import { Context, Next } from "koa";
import { subscriptions } from "../mocks/subscriptions";
import { exams } from "../mocks/exams";

export const examsMiddleware = async (ctx: Context, next: Next) => {
  const { exam_id, student_id, questions } = ctx.request.body;

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

  // Trova l'esame nella lista
  const exam = exams.find((e) => e._id === exam_id);
  if (!exam) {
    ctx.status = 404;
    ctx.body = { error: `Esame con id ${exam_id} non trovato` };
    return;
  }

  // Verifica domande e risposte
  if (questions && Array.isArray(questions)) {
    for (const question of questions) {
      const foundQuestion = exam.questions.find((eq) => eq._id === question.question_id);

      if (!foundQuestion) {
        continue; // passa alla prossima domanda se non appartiene all'esame
      }

      if (question.answers && Array.isArray(question.answers)) {
        for (const ans of question.answers) {
          const validAnswer = foundQuestion.answers.find((ea) => ea._id === ans.answer_id);
          if (!validAnswer) {
            ctx.status = 400;
            ctx.body = { error: `Risposta ${ans.answer_id} non valida per la domanda ${question.question_id}` };
            return;
          }
        }
      }

      break; // interrompe il ciclo dopo una domanda valida
    }
  }


  ctx.state.exam = exam;
  await next();
};
