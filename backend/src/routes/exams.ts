import Router from "@koa/router";
import ExamsMocks from "../mocks/examsMocks";

type Exam = {
  id: number;
  name: string;
  date?: string;
  description?: string;
  schedule_date?: string;
  max_time?: number;
};

let exams: Exam[] = [
  {
    id: 1,
    name: "Matematica",
    schedule_date: "2025-11-15",
    max_time: 1200,
  },
  { id: 2, name: "Fisica", schedule_date: "2025-11-15", max_time: 1200 },
];

const router = new Router({
  prefix: "/api",
});

router.get("/exams", async (ctx) => {
  ctx.body = ExamsMocks;
  ctx.status = 200;
});

router.get(`/exams/:id`, async (ctx) => {
  ctx.body =
    ExamsMocks._id === ctx.params.id
      ? ExamsMocks
      : { message: "Exam not found" };
  ctx.status = 200;
});

router.post("/exams", async (ctx) => {
  try {
    const { _id, name, schedule_date, max_time } = ctx.request.body;

    if (!_id || !name || !schedule_date || !max_time) {
      ctx.body = { message: "Missing fields" };
      ctx.status = 400;
      return;
    }
    const newExam = {
      id: exams.length + 1,
      name,
      schedule_date,
      max_time,
    };

    exams.push(newExam);

    ctx.status = 201; // Created
    ctx.body = newExam;
  } catch (err) {
    console.error("Errore durante la creazione dell'esame:", err);
    ctx.status = 500;
    ctx.body = { error: "Errore interno del server" };
  }
  console.log(exams);
});

router.patch("/exams", async (ctx) => {
  try {
    const { id, name, schedule_date, max_time } = ctx.request.body;

    if (!id || !name || !schedule_date || !max_time) {
      ctx.body = { message: "Missing fields" };
      ctx.status = 400;
      return;
    }

    const index = exams.findIndex((exam) => exam.id === id);

    if (index === -1) {
      ctx.body = { message: "Exam not found" };
      ctx.status = 404;
      return;
    }

    exams[index] = {
      id,
      name,
      schedule_date,
      max_time,
    };

    ctx.status = 200;
    ctx.body = exams[index];
  } catch (err) {
    console.error("Errore durante la modifica dell'esame:", err);
    ctx.status = 500;
    ctx.body = { error: "Errore interno del server" };
  }
   console.log(exams);
});

router.delete("/exams", async (ctx) => {
  ctx.body = "Test route is working!";
  ctx.status = 200;
});

export default router;
