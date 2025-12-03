import { Context, Next } from "koa";
import Joi from "joi";
const bcrypt = require("bcrypt");

const joiSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp("^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[^a-zA-Z0-9]).{8,30}$")).required(),
});

export const userValidator = async (ctx: Context, next: Next) => {
    const { email, password } = ctx.request.body;
    const { error } = joiSchema.validate({ email, password });
    if (error) {
        ctx.status = 400;
        ctx.body = { error: error.details[0].message };
        return;
    }
    await next();
}

export const hashPassword = async (ctx: Context, next: Next) => {
    const { password } = ctx.request.body;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    ctx.request.body.password = hashedPassword;
    await next();
}

export const compareEmail = async (ctx: Context, next: Next) => {
    const { email } = ctx.request.body;
    const user = await ctx.db.collection("users").findOne({ email });
    if (user) {
        ctx.status = 409;
        ctx.body = { error: "Email already in use" };
        return;
    }
    await next();
}

