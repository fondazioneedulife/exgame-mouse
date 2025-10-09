import { Context, Next } from "koa";

export async function responseTimeLogger(ctx: Context, next: Next) {
  const start = Date.now();
  await next(); // passa al middleware/rotta successiva
  const duration = Date.now() - start;
  console.log(`${ctx.status} - Inizio: ${start}ms - Durata: ${duration}ms`);
}

