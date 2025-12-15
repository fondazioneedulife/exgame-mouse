import bcrypt from "bcryptjs";
import Joi from "joi";
import jwt from "jsonwebtoken";
import { Context, Next } from "koa";

export const validateRegistration = async (ctx: Context, next: Next) => {
  const schema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string()
      .min(6)
      .required()
      .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$")),
  });

  const { error } = schema.validate(ctx.request.body);
  if (error) {
    ctx.status = 400;
    ctx.body = { error: error.details[0].message };
    return;
  }
  await next();
};

export const hashPassword = async (ctx: Context, next: Next) => {
  const password = await bcrypt.hash(ctx.request.body.password, 10);
  ctx.request.body.password = password;
  await next();
};
export const validateLogin = async (ctx: Context, next: Next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  const { error } = schema.validate(ctx.request.body);
  if (error) {
    ctx.status = 400;
    ctx.body = { error: error.details[0].message };
    return;
  }
  await next();
}

export const generateJWT = (user: any) => {
  return jwt.sign(
    {
      email: user.email,
    },
    process.env.JWT_SECRET as string,
    {
      expiresIn: "30m",
    }
  );
};


