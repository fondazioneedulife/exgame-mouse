import Router from "@koa/router";
import { exams } from "../src/mocks/exams"

const examsRouter = new Router();

examsRouter.get("/api/exams", async (ctx) => {
    ctx.body = exams
    ctx.status = 200;
})

examsRouter.get("/api/exams/:id", async (ctx) => {
    ctx.body = exams.find(exams => ctx.params.id === exams._id)
    ctx.status = 200;
})

export default examsRouter;