import Koa from "koa";
import Router from "@koa/router";
import bodyParser from "@koa/bodyparser";
import serverRoutes from "./routes/server";
import examRoutes from "./routes/exams";
import {config} from "./config/config";

const app = new Koa();
const router = new Router();

app.use(bodyParser());

router.get("/", async (ctx) => {
  ctx.body = "Hello, World!";
  ctx.status = 200;
});

app.use(router.routes()).use(router.allowedMethods());
app.use(serverRoutes.routes()).use(serverRoutes.allowedMethods());
app.use(examRoutes.routes()).use(examRoutes.allowedMethods());

app.listen(config.PORT, () => {
  console.log(`Server is running on http://${config.HOST}:${config.PORT}`);
});
