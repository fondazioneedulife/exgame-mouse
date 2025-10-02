import Router from "@koa/router";
const router = new Router({
  prefix: "/server"
});

router.get("/check", async (ctx) => {
  ctx.body = "Test route is working!";
  ctx.status = 200;
});
export default router;
