//users routes

import Router from "@koa/router";
//import { users } from "../mocks/users";
import UsersDAO from "../dao/users.dao";
import { hashPassword } from "../lib/helper";

const router = new Router({
  prefix: "api/users",
});

const usersDAO = new UsersDAO();

// --- Routes ---

//GEt - tutti gli utenti
router.get("/", async (ctx) => {
  try {
    const allUsers = await usersDAO.getAll();
    ctx.status = 200;
    ctx.body = allUsers;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: "Internal Server Error" };
  }
});

//POST - creazione nuovo utente
router.post("/new", async (ctx) => {
  try {
    const user = ctx.request.body;
    user.password = await hashPassword(user.password);
    const newUser = await usersDAO.create(user);

    if (!newUser || !newUser._id) {
      ctx.status = 400;
      ctx.body = { error: "Missing required data user (_id required)" };
      return;
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: "Errore durante la creazione" };
    return;
  }
});

//LOGIN
router.post("/login", async (ctx) => {});

//LOGOUT
router.post("/logout", async (ctx) => {});

//ME - restituisce le informazioni dell'utente completo
router.get("/me", async (ctx) => {});
