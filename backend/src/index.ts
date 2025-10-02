import Koa from "koa";
import Router from "@koa/router";
import bodyParser from "@koa/bodyparser";
import { config } from "./config/config";
import serverRoutes from "./routes/server";

const app = new Koa();
const router = new Router();

app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());
app.use(serverRoutes.routes()).use(serverRoutes.allowedMethods());

app.listen(config.PORT, () => {
    console.log(`Server running on http://${config.HOST}:${config.PORT}`);
});



