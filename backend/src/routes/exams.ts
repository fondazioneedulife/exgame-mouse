import Router from "@koa/router";
import { exams } from "../mocks/exams";

const router = new Router({
  prefix: "/api/exams",
});

// ---- Helper Functions ----
const findExamById = (id: string) => exams.find((e) => e._id === id);
const findExamIndexById = (id: string) => exams.findIndex((e) => e._id === id);

// ---- Routes ----

// GET /exams - lista di tutti gli esami
router.get("/", (ctx) => {
  ctx.status = 200;
  ctx.body = exams;
});

// GET /exams/search - cercare gli esami simili a quel nome
router.get("/search", (ctx) => {
  let { name } = ctx.query;

  if (!name || typeof name !== "string") {
    ctx.status = 400;
    ctx.body = { error: "Missing query parameter 'name'" };
    return;
  }

  if (!/^[A-Za-z]+$/.test(name)) {
    for (let i = 0; i < name.length; i++) {
      if (!/^[A-Za-z]+$/.test(name[i])) {
        console.log(name[i]);
        name = name.replace(`${name[i]}`, '')
        console.log(name);
      }
    }
  }

  const search = name.toLowerCase();

  const results = exams.filter((exam) =>
    exam.name.toLowerCase().includes(search)
  );

  ctx.status = 200;
  ctx.body = results;
});

router.get('/time', ctx => {
  const min_time = Number(ctx.query.min_time);

  if (!min_time || isNaN(min_time) || min_time < 0) {
    ctx.status = 400;
    ctx.body = { error: "Parametro 'min_time' non valido. Il valore deve essere un numero positivo" };
    return;
  }

  const results = exams.filter((exam) =>
    exam.max_time >= min_time
  );

  ctx.status = 200;
  ctx.body = results;
});


// GET /exams/:id - dettaglio di un singolo esame
router.get("/:id", (ctx) => {
  const { id } = ctx.params;
  const exam = findExamById(id);

  if (!exam) {
    ctx.status = 404;
    ctx.body = { error: `Exam with id ${id} not found` };
    return;
  }

  ctx.status = 200;
  ctx.body = exam;
});

// POST /exams/new - crea un nuovo esame
router.post("/new", (ctx) => {
  try {
    const newExam = ctx.request.body;

    if (!newExam || !newExam._id) {
      ctx.status = 400;
      ctx.body = { error: "Missing required exam data (_id required)" };
      return;
    }

    exams.push(newExam);
    ctx.status = 201;
    ctx.body = newExam;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: "Errore durante la creazione" };
  }
});

// PATCH /exams/update/:id - aggiorna un esame esistente
router.patch("/update/:id", (ctx) => {
  const { id } = ctx.params;
  const index = findExamIndexById(id);

  if (index === -1) {
    ctx.status = 404;
    ctx.body = { error: "Esame non trovato!" };
    return;
  }

  try {
    const updatedExam = { ...exams[index], ...ctx.request.body };
    exams[index] = updatedExam;

    ctx.status = 202;
    ctx.body = updatedExam;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: "Errore durante l'aggiornamento" };
  }
});

// DELETE /exams/:id - elimina un esame
router.delete("/:id", (ctx) => {
  const { id } = ctx.params;
  const index = findExamIndexById(id);

  if (index === -1) {
    ctx.status = 404;
    ctx.body = { error: "Esame non trovato!" };
    return;
  }

  try {
    const deletedExam = exams.splice(index, 1)[0];
    ctx.status = 200;
    ctx.body = { message: "Esame eliminato!", exam: deletedExam };
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: "Errore durante l'eliminazione" };
  }
});

export default router;

// 0101000001000001010011000100110001000101
// 01010000010000010100110001001100010011110100111001001001001000000101000001000001010011110100110001001111