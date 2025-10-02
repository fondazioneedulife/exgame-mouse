import Router from "@koa/router";

const router = new Router({
    prefix: "/server",
});

router.get("/check", async (ctx) => {
    ctx.body = "Health check OK!"
    ctx.status = 200;
})

export default router;