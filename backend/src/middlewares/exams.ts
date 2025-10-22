import { Context, Next } from "koa";
import { STUDENT_1, subscriptions } from "../mocks/subscriptions";
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

  if (studentYetRegistered && STUDENT_1) {
    ctx.status = 400;
    ctx.body = { error: "Esame già registrato da questo studente" };
    return;
  }

  await next();
};
