
// Logger middleware

export const loggedMiddleware = async (ctx: any, next: any) => {
  await next();
  const rt = ctx.response.get("X-Response-Time");
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
};

export const responseTimeMiddleware= async (ctx: any, next: any) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set("X-Response-Time", `${ms}ms`);
};


export const combinedLoggedMiddleware= async (ctx: any) => {
  ctx.body = "Hello World";
};
