import Router from "@koa/router";
import { subscriptions } from "../mocks/subscriptions";

const router = new Router({
    prefix: "/api/subscriptions",
});

// --- Routes ---

//GET /subscriptions -lista di tutte le subscribtions
router.get("/", (ctx) => {
  ctx.status = 200;
  ctx.body = subscriptions;
})

//POST /subscriptions -crea una nuova subscription
router.post("/", (ctx) => {
    try{
        const newSub = ctx.request.body;
        if(!newSub || !newSub.exam_id){
            ctx.status = 400;
            ctx.body = {error: "correct id required"};
        }
        subscriptions.map((sub) => {
            if(sub.student_id === newSub.student_id)
                ctx.status = 400;
                ctx.body = {error: "you're already registered for this exam!"};
        })
        //if()
        subscriptions.push(newSub);
        ctx.status = 200;
        ctx.body = newSub;
    }catch{
        ctx.status = 404;
        ctx.body = {error: "problems with creation"};
    }
})

export default router;