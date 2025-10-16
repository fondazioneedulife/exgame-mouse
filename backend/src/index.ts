import Koa from "koa";
import Router from "@koa/router";
import bodyParser from "@koa/bodyparser";
import { config } from "./config/config";
import serverRoute from "./routes/server";
import examsRoute from "./routes/exams";
import subscriptionsRoute from "./routes/subscriptions";
import cors from "@koa/cors";
import logger from "./middlewares/logger";

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
app.use(subscriptionsRoute.routes()).use(subscriptionsRoute.allowedMethods());

app.listen(config.PORT, () => {
  console.log(`Server running at http://${config.HOST}:${config.PORT}`);
});
