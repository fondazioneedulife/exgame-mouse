import Koa from "koa";
import {Context, Next} from "koa";

const Logger = async(ctx: Context, next: Next) => {
        const start = Date.now();
        await next();
        const ms = Date.now() - start;
        console.log(`${ctx.method} ${ctx.url} ${ctx.status} - ${ms}ms`)
};

export default Logger;