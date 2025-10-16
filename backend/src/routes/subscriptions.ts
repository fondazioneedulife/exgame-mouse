import Router from "@koa/router";
import { exams } from "../mocks/exams"; // ci serve per validare gli exam_id

const router = new Router({
  prefix: "/api/subscriptions",
});

let subscriptions: any = []; // mock temporaneo

// GET /subscriptions - tutte le iscrizioni
router.get("/", (ctx) => {
  ctx.status = 200;
  ctx.body = subscriptions;
});

// GET /subscriptions/:id - singola iscrizione
router.get("/:id", (ctx) => {
  const { id } = ctx.params;
  const sub = subscriptions.find((s: { _id: string; }) => s._id === id);
  if (!sub) {
    ctx.status = 404;
    ctx.body = { error: "Subscription non trovata" };
    return;
  }
  ctx.status = 200;
  ctx.body = sub;
});

// POST /subscriptions - crea nuova iscrizione
router.post("/", (ctx) => {
  const { _id, student_id, exam_id, question_id, answer_id } = ctx.request.body;

  if (!_id || !student_id || !exam_id) {
    ctx.status = 400;
    ctx.body = { error: "Dati mancanti per creare la subscription" };
    return;
  }

  // --- STEP 2: Validazioni ---
  const exam = exams.find((e) => e._id === exam_id);
  if (!exam) {
    ctx.status = 400;
    ctx.body = { error: "exam_id non valido: esame non trovato" };
    return;
  }

  // Impedire doppia iscrizione dello stesso studente allo stesso esame
  const alreadyExists = subscriptions.some(
    (s: { student_id: any; exam_id: any; }) => s.student_id === student_id && s.exam_id === exam_id
  );
  if (alreadyExists) {
    ctx.status = 400;
    ctx.body = { error: "Studente già iscritto a questo esame" };
    return;
  }

  // Verifica che question_id appartenga a quell'esame
  const question = exam.questions?.find((q) => q._id === question_id);
  if (question_id && !question) {
    ctx.status = 400;
    ctx.body = { error: "question_id non appartiene all'esame" };
    return;
  }

  // Verifica che answer_id appartenga alla domanda
  const answer = question?.answers?.find((a) => a._id === answer_id);
  if (answer_id && !answer) {
    ctx.status = 400;
    ctx.body = { error: "answer_id non appartiene alla domanda" };
    return;
  }

  // Tutto ok → creiamo la subscription
  const newSub = { _id, student_id, exam_id, question_id, answer_id };
  subscriptions.push(newSub);

  ctx.status = 201;
  ctx.body = newSub;
});

export default router;
