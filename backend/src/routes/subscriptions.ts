import Router from "@koa/router";
import { subscriptions } from "../mocks/subscriptions";
import { exams } from "../mocks/exams";

const router = new Router({
  prefix: "/api/subscriptions",
});

router.post("/", (ctx) => {
    try {
      const newSub = ctx.request.body;
  
      if (!newSub || !newSub._id || !newSub.student_id || !newSub.exam_id) {
        ctx.status = 400;
        ctx.body = { error: "Missing required subscription data (_id, student_id, exam_id required)" };
        return;
      }
  
      // Controllo esame
      const exam = exams.find((e) => e._id === newSub.exam_id);
      if (!exam) {
        ctx.status = 400;
        ctx.body = { error: `Exam with id ${newSub.exam_id} does not exist` };
        return;
      }
  
      // Controllo studente non sia già iscritto all'esame
      const alreadySubscribed = subscriptions.some(
        (s) => s.student_id === newSub.student_id && s.exam_id === newSub.exam_id
      );
      if (alreadySubscribed) {
        ctx.status = 400;
        ctx.body = { error: "Student already subscribed to this exam" };
        return;
      }
  
      // Controllo che ogni question_id e answer_id appartenga all'esame
      if (newSub.questions && Array.isArray(newSub.questions)) {
        for (const q of newSub.questions) {
          const question = exam.questions.find((eq) => eq._id === q.question_id);
          if (!question) {
            ctx.status = 400;
            ctx.body = { error: `Question with id ${q.question_id} does not belong to exam ${exam._id}` };
            return;
          }
          if (q.responses && Array.isArray(q.responses)) {
            for (const r of q.responses) {
              const answerExists = question.answers.some((a) => a._id === r.answer_id);
              if (!answerExists) {
                ctx.status = 400;
                ctx.body = { error: `Answer with id ${r.answer_id} does not belong to question ${question._id}` };
                return;
              }
            }
          }
        }
      }
      

      subscriptions.push(newSub);
      ctx.status = 201;
      ctx.body = newSub;
    } catch (error) {
      ctx.status = 500;
      ctx.body = { error: "Error creating subscription" };
    }
  });

export default router;

