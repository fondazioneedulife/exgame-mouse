import { config } from "./config/config";
import Koa from "koa";
import Router from "@koa/router";
import bodyParser from "@koa/bodyparser"
import serverRoutes from "./routes/test"
import examRoutes from "./routes/exams"

console.log(config.PORT);

const app = new Koa();
app.use(bodyParser());
const router = new Router();


router.get("/", async (ctx)=>{
    ctx.body = "hello world";
    ctx.status = 200;
})


app.use(router.routes());
app.use(serverRoutes.routes());
app.use(examRoutes.routes());

app.use(router.allowedMethods());
app.use(serverRoutes.allowedMethods());
app.use(examRoutes.allowedMethods());
app.listen(config.PORT, () => {
    console.log('server running at http://' + config.HOST + ':' + config.PORT);
});
