import Router from "@koa/router";
import { mySubscriptions } from "../mocks/subscriptions";

const router = new Router({
  prefix: "/api/subscriptions",
});

router.get("/", (ctx) => {
  ctx.status = 200;
  ctx.body = mySubscriptions;
});

router.put("/", (ctx) => {
  ctx.status = 200;
  ctx.body = ctx.request.body;
  console.log(ctx.request.body);
});

export default router;
