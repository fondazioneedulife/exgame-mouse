import Router from "@koa/router";
import { deflateSync } from "zlib";
const router = new Router({
    prefix: "/server"
});

router.get("/check", async(ctx) =>{
    ctx.body ="Health check ok";
    ctx.status = 200;
})

export default router;