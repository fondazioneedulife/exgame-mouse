import { Context, Next } from "koa";

export async function responseTimeLogger(ctx: Context, next: Next) {
  const start = Date.now();
  await next();
  const duration = Date.now() - start;
  console.log(`Metodo: ${ctx.method}\nURL: ${ctx.url}\nStato: ${ctx.status}\nDurata: ${duration}ms`);
}