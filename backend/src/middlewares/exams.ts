import { Context, Next } from "koa";
import { exams } from "../mocks/exams";
export const examsMiddleware = async (ctx: Context, next: Next) => {
  const { exam_id } = ctx.request.body;
  if (!exam_id) {
    ctx.status = 400;
    ctx.body = { error: "Parametro 'exam_id' mancante" };
    return;
  }

  const examExists = exams.some((exam) => exam._id === exam_id);
  if (!examExists) {
    ctx.status = 404;
    ctx.body = { error: "Esame non trovato" };
    return;
  }

  await next();
};
