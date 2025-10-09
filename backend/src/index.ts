import Koa from "koa";
import Router from "@koa/router";
import bodyParser from "@koa/bodyparser";
import { config } from "./config/config";
import serverRoute from "./routes/server";
import examsRoute from "./routes/exams";
import cors from "@koa/cors";
import { logger } from "./middleware/logger";

const app = new Koa();
const router = new Router();

app.use(logger);

app.use(bodyParser());

app.use(
  cors({
    origin: config.FRONTEND_APP,
  }),
);

app.use(router.routes()).use(router.allowedMethods());
app.use(serverRoute.routes()).use(serverRoute.allowedMethods());
app.use(examsRoute.routes()).use(examsRoute.allowedMethods());

app.listen(config.PORT, () => {
  console.log(`Server running at http://${config.HOST}:${config.PORT}`);
});
