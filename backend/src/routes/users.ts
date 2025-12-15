import Router from "@koa/router";
import UsersDAO from "../dao/users.dao";
import { hashPasswordMiddleware, usersValidateMiddleware } from "../middlewares/users";

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
  "/",
  usersValidateMiddleware,
  hashPasswordMiddleware,
  async (ctx) => {
    try {
      const { email } = ctx.request.body;
      const existingUser = await usersDAO.findByEmail(email);

      if (existingUser) {
        ctx.status = 409;
        ctx.body = {
          status: "error",
          message: "User with this email already exists",
        };
        return;
      }
      const newUser = await usersDAO.create(ctx.request.body);

      ctx.status = 201;
      ctx.body = newUser;

    } catch (error) {
      ctx.status = 500;
      ctx.body = {
        status: "error",
        message: "Internal Server Error",
      };
    }
  }
);

export default router;
