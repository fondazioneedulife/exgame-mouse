import Router from "@koa/router";
import { subscriptions } from "../mocks/subscriptions";

const router = new Router({
  prefix: "/api/subscriptions",
});

router.get("/", (ctx) => {
  ctx.status = 200;
  ctx.body = subscriptions;
});

export default router;
