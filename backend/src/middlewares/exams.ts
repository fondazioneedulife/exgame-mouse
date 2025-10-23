import { Context, Next } from "koa";
import { subscriptions } from "../mocks/subscriptions";
import { exams } from "../mocks/exams";
import { questions } from "../mocks/questions";

export const examsMiddleware = async (ctx: Context, next: Next) => {
  const { exam_id, student_id, body_questions } = ctx.request.body;
  // console.log("Ctx request body", JSON.stringify(ctx.request.body))

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

  const existingExam = subscriptions.some(
    (sub) => {
      exams.map((exam)=>sub.exam_id===exam._id)
    }
  )

  const existingQuestion = subscriptions.some(
    (sub) => {
      sub.questions.map((question)=>{
        exams.map((exam)=>{
          exam.questions.map((q)=>{
            question.question_id===q._id
          })
        })
      })
    }
  )
  console.log("existing Question: ", existingQuestion)



  await next();
};
