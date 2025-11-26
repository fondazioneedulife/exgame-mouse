import Router from "@koa/router";
import UsersDAO from "../dao/user.dao";

const router = new Router({
  prefix: "/api/users",
});
const usersDAO = new UsersDAO();

router.get("/:id", async (ctx) => {
  const { id } = ctx.params;
  const user = await usersDAO.getById(id);

  if (!user) {
    ctx.status = 404;
    ctx.body = { error: `Utente con id ${id} non trovato` };
    return;
  }

  ctx.status = 200;
  ctx.body = user;
});

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


export default router;
