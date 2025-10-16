import Router from "@koa/router";
import { subscriptions } from "../mocks//subscriptions";
import { exams } from "../mocks/exams";

const router = new Router({
  prefix: "/api/subscriptions",
});

router.get("/", (ctx) => {
  ctx.status = 200;
  ctx.body = subscriptions;
});

router.post("/", (ctx) => {
  try {
    const newSubscription = ctx.request.body;

    if (
      !newSubscription ||
      !newSubscription.exam_id ||
      !newSubscription.student_id
    ) {
      ctx.status = 400;
      ctx.body = {
        error: "400 Bad Request - exam_id and student_id are required",
      };
      return;
    }

    const { exam_id, student_id, questions } = newSubscription;

    const exam = exams.find((e) => e._id === exam_id);
    if (!exam) {
      ctx.status = 400;
      ctx.body = { error: "400 Bad Request - exam_id not found" };
      return;
    }

    const subscribed = subscriptions.find(
      (s) => s.exam_id === exam_id && s.student_id === student_id,
    );
    if (subscribed) {
      ctx.status = 400;
      ctx.body = {
        error: "400 Bad Request - student already subscribed to this exam",
      };
      return;
    }


    subscriptions.push(newSubscription);                  
    ctx.status = 201;
    ctx.body = newSubscription;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: "Errore durante la creazione" };
  }
});

export default router;
