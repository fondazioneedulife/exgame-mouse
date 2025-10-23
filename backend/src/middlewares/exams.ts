import { Context, Next } from "koa";
import { subscriptions } from "../mocks/subscriptions";
import { exams } from "../mocks/exams";

export const examsMiddleware = async (ctx: Context, next: Next) => {
  const { exam, exam_id, questions, answers, student_id } = ctx.request.body;

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


  //trovo esame e verifico che esista
  const isExamsExists = exams.some(e => e._id === exam_id)
  if (exam.exam_id && isExamsExists) {
    //verifico che tutte le questions esistano in quell'esame 
    for (const q of questions) {
      if (q._id === q)
        continue;
      else {
        ctx.status = 400;
        ctx.body = { error: "Alcune domande o risposte non appartengono a questo esame!" };
        break;
      }
    };
    //verifico che tutte le risposte esistano per quella domanda e per quell'esame
    for (const a of answers) {
      if (a._id === a)
        continue;
      else {
        ctx.status = 400;
        ctx.body = { error: "Alcune domande o risposte non appartengono a questo esame!" };
        break;
      }
    };
  }
  else {
    ctx.status = 400;
    ctx.body = { error: "L'esame non corrisponde o non esiste" };
    return;
  }

  await next();
};
