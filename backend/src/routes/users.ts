import Router from "@koa/router";
import bcrypt from "bcryptjs";
import UsersDAO from "../dao/users.dao";
import {
  generateJWT,
  hashPassword,
  validateLogin,
  validateRegistration,
} from "../middlewares/users";
import { protectRoute } from "../middlewares/protection";

const router = new Router({
  prefix: "/api/users",
});

const usersDAO = new UsersDAO();

router.get("/", async (ctx) => {
  try {
    const users = await usersDAO.getAll();
    ctx.status = 200;
    ctx.body = users;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: "Internal Server Error" };
  }
});

router.post(
  "/registration",
  validateRegistration,
  hashPassword,
  async (ctx) => {
    try {
      const { email } = ctx.request.body;
      const existingUser = await usersDAO.getByEmail(email);
      if (existingUser) {
        ctx.status = 409;
        ctx.body = { error: "Email already in use" };
        return;
      }

      const newUser = await usersDAO.create(ctx.request.body);
      if (!newUser || !newUser._id) {
        ctx.status = 400;
        ctx.body = { error: "User registration failed" };
        return;
      }
      ctx.status = 201;
      ctx.body = newUser;
    } catch (error) {
      ctx.status = 500;
      ctx.body = { error: "Internal Server Error" };
    }
  },
);

router.post("/login", validateLogin, async (ctx) => {
  try {
    const { email, password } = ctx.request.body;
    const user = await usersDAO.getByEmail(email);
    if (!user) {
      ctx.status = 401;
      ctx.body = { error: "Invalid email or password" };
      return;
    }

    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) {
      ctx.status = 401;
      ctx.body = { error: "Invalid email or password" };
      return;
    }

    const token = generateJWT(user);
    ctx.status = 200;
    ctx.body = { token };
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: "Internal Server Error" };
  }
});

router.get("/profile", protectRoute, async (ctx) => {
  ctx.body = ctx.state.user;
});


export default router;
