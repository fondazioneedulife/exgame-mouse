import { config } from "./config/config";
import Koa from "koa";
import Router from "@koa/router";
import bodyParser from "@koa/bodyparser";
import serverRoutes from "./routes/server";
import examsRoutes from "./routes/exams";

const app = new Koa();
const router = new Router ();
app.use(bodyParser());



app.use(router.routes()).use(router.allowedMethods());
app.use(serverRoutes.routes()).use(serverRoutes.allowedMethods());
app.use(examsRoutes.routes()).use(examsRoutes.allowedMethods());


app.listen(config.PORT, () => {
  console.log(`Server running at http://${config.HOST}:${config.PORT}`);
})
