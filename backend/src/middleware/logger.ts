import { Context, Next } from "koa";

export const logger = async (ctx: Context, next: Next) => {
  const start = performance.now();
  await next();
  const duration = performance.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${duration.toFixed(2)} ms`);
  ctx.set("X-Response-Time", `${duration.toFixed(2)}ms`);
};
