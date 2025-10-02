import Router from "@koa/router";

const router = new Router();


router.get("/check", async (ctx) => {
    ctx.body = "Health check OK!"
    ctx.status = 200;
});

export default router;