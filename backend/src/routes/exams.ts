import Router from "@koa/router";
import { questions } from "../mocks/exams";
import type {ExamType} from "../mocks/exams";
const router = new Router({
    prefix: "/api"
});

router.get("/exams",async(ctx) =>{
ctx.body = questions;
ctx.status = 200;
console.log(questions);
})




router.get('/exams/:id', async(ctx) =>{
    const examsFound = questions.find(e=>e._id === ctx.params.id);
if(examsFound){
    ctx.body = examsFound;
    ctx.status = 200;
}else{
    ctx.status = 404;
    ctx.body = {error : "esame non trovato"};
}
console.log(ctx.body);
})

router.post('/addExam',async(ctx) =>{
    const newExam = ctx.request.body as ExamType;
    questions.push(newExam);
    ctx.status=201;
     ctx.body = { message: "Exam aggiunto con successo", exam: newExam };
    
})



export default router;