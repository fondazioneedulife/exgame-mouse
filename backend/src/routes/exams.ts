import Router from "@koa/router";
import { exams } from "../mocks/exams";

const router = new Router({
  prefix: "/api/exams",
});

// ---- Helper Functions ----
const findExamById = (id: string) => exams.find((e) => e._id === id);
const findExamIndexById = (id: string) => exams.findIndex((e) => e._id === id);
const cleanSearchName = (name: string) => name.replace(/[^a-zA-Z0-9]/g, "");
const findExamByName = (name: string) => exams.filter((e) => e.name.toLocaleLowerCase().includes(name));
const findExamByTime = (minTime: number) => exams.filter((e) => minTime < e.max_time);

// ---- Routes ----

// GET /exams - lista di tutti gli esami
router.get("/", (ctx) => {
  ctx.status = 200;
  ctx.body = exams;
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

//GET /search - cerca un esame per nome
router.get("/search/:name", (ctx) => {
  const name = ctx.params.name;

  if (!name) {
    ctx.status = 400;
    ctx.body = { error: "Nome non trovato!" };
    return;
  }
  if (typeof (name) !== "string") {
    ctx.status = 500;
    ctx.body = { error: "Il nome non è una stringa singola" };
    return;
  }
  const nameCleaned = cleanSearchName(name);
  const examsName = findExamByName(nameCleaned);

  ctx.status = 200;
  ctx.body = examsName;
});

//GET /time - cerca un esame per durata massima
router.get("/time", (ctx) => {
  const examsTime = ctx.query.minTime;

  if (!examsTime) {
    ctx.status = 404;
    ctx.body = { error: "Non esiste" };
  }

  const examsTimeNum = parseInt(examsTime as string, 10);

  if (isNaN(examsTimeNum) || examsTimeNum < 0) {
    ctx.status = 400;
    ctx.body = { error: "Non è un numero" };
    return;
  }

  const examsFilteredTime = findExamByTime(examsTimeNum);

  ctx.status = 200;
  ctx.body = examsFilteredTime;
  console.log(examsFilteredTime);
});

export default router;
