import { Context, Next } from "koa";
import Joi from "joi";

export const userSchema = Joi.object({
  email: Joi.string()
    .email()
    .required(),

  password: Joi.string()
    .min(8)
    .max(30)
    .pattern(/[!@#$%^&*(),.?":{}|<>]/)
    .required()
});

export const usersValidateMiddleware = async (ctx: Context, next: Next) => {
   try {
    const { error } = userSchema.validate(ctx.request.body);

    if (error) {
      ctx.status = 400;
      ctx.body = {
        status: "error",
        message: error.details[0].message
      };
      return;
    }

    await next();

  } catch (err) {
    ctx.status = 500;
    ctx.body = {
      status: "error",
      message: "Errore interno del server"
    };
  }
};

export const hashPasswordMiddleware = async (ctx: Context, next: Next) => {
  const bcrypt = await import("bcryptjs");
  const saltRounds = 10;
  const { password } = ctx.request.body;

  const hashedPassword = await bcrypt.hash(password, saltRounds);
  ctx.request.body.password = hashedPassword;
  await next();
}
