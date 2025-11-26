import Router from "@koa/router";
import UsersDAO from "../dao/users.dao";

const router = new Router({
  prefix: "/api/users",
});

const usersDAO = new UsersDAO();

router.get("/",  async (ctx) => {
  try {
    const users =  await usersDAO.getAll();
    ctx.status = 200;
    ctx.body = users;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: "Internal Server Error" };
  }
});

router.post("/", async (ctx) => {
  try{
    const newUser = await usersDAO.create(ctx.request.body);
    if(!newUser || !newUser.id){
      ctx.status = 400;
      ctx.body = { error: "400 Bad Request" };
      return;
    }
    ctx.status = 201;
    ctx.body = newUser;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: "Internal Server Error" };
  }
});

export default router;