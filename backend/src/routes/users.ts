import Router from "@koa/router";
import UsersDAO from "../dao/user.dao";

const router = new Router({
  prefix: "/api/user",
});
const usersDAO = new UsersDAO();

router.post("/new", async (ctx) => {
  try {
    const newUser = await usersDAO.create(ctx.request.body);
    ctx.status = 201;
    ctx.body = newUser;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: "Errore durante la creazione" };
  }
});

router.post("/login", async (ctx) => {

});

router.post("/logout", async (ctx) => {

});

router.get("/me", async (ctx) => {

});


export default router;
