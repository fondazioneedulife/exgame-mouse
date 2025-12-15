import { Context, Next } from "koa";
import jwt, { JwtPayload } from "jsonwebtoken";

export const protectRoute = async (ctx: Context, next: Next) => {
  const authHeader = ctx.headers.authorization;

  if (!authHeader) {
    ctx.status = 401;
    ctx.body = { error: "Authorization header missing" };
    return;
  }

 
  const parts = authHeader.split(" ");
  if (parts.length !== 2 || parts[0] !== "Bearer") {
    ctx.status = 401;
    ctx.body = { error: "Invalid authorization format" };
    return;
  }

  const token = parts[1];

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as JwtPayload;

    
    ctx.state.user = decoded;

    await next();
  } catch (error) {
    ctx.status = 401;
    ctx.body = { error: "Invalid or expired token" };
  }
};
