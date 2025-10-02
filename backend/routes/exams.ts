import Router from "@koa/router";
import { exams } from "../src/mocks/exams"

const examsRouter = new Router();

examsRouter.get("/api/exams", async (ctx) => {
    ctx.body = exams;
    ctx.status = 200;
})

examsRouter.get("/api/exams/:id", async (ctx) => {
    ctx.body = exams.find(exams => ctx.params.id === exams._id);
    ctx.status = 200;
})

examsRouter.post("/api/exams", async (ctx) => {
    const newExam = ctx.request.body;
    exams.push(newExam);
    ctx.body = exams;
    ctx.status = 200;
})

examsRouter.patch("/api/exams/:id", async (ctx) => {
    const findId = exams.findIndex(exams => ctx.params.id === exams._id);
    const updates = ctx.request.body;
    exams[findId] = {...updates};
    ctx.body = `Aggiornato l'esame ${findId}`;
    ctx.status = 200;
})

examsRouter.delete("/api/exams/:id", async (ctx) => {
    const findId = exams.findIndex(exams => ctx.params.id === exams._id);
    const removedExam = exams.splice(findId, 1);
    ctx.body = `Rimosso l'esame ${findId}`
    ctx.status = 200;
})

export default examsRouter;