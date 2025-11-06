import Router from "@koa/router";
import { exams } from "../mocks/exams";
import {
  findExamById,
  findExamIndexById,
  sanitizeSearchInput,
} from "../lib/helper";
import ExamsDAO from "../dao/exams.dao";

const router = new Router({
  prefix: "/api/exams",
});

const examsDAO = new ExamsDAO();

// ---- Routes ----

// GET /exams - lista di tutti gli esami
router.get("/", (ctx) => {
  const exams = examsDAO.getAll();
  ctx.status = 200;
  ctx.body = exams;
});

router.get("/search", async (ctx) => {
  const { name } = ctx.query;
  if (!name) {
    ctx.status = 400;
    ctx.body = { error: "400 Bad Request" };
    return;
  }
  const searchTerm =
    typeof name === "string" ? name : Array.isArray(name) ? name[0] : "";

  const sanitizedSearcserhTerm = sanitizeSearchInput(searchTerm);
  const exam = examsDAO.search(sanitizedSearcserhTerm);
  const results = await exam;

  ctx.status = 200;
  ctx.body = {
    searchTerm: sanitizedSearcserhTerm,
    count: results.length,
    results: results,
  };
});

router.get("/time", (ctx) => {
  
  const minTime = parseInt(ctx.query.min_time as string) || 0;
  const maxTime = parseInt(ctx.query.max_time as string) || 0;


  if (!minTime || isNaN(minTime) || minTime < 0 || !maxTime || isNaN(maxTime) || maxTime < 0) {
    ctx.status = 400;
    ctx.body = { error: "Parametro 'min_time' mancante o non valido" };
    return;
  }

  const filtered = examsDAO.getByTimeRange(minTime, maxTime);
  ctx.status = 200;
  ctx.body = filtered;
});

// GET /exams/:id - dettaglio di un singolo esame
router.get("/:id", (ctx) => {
  const { id } = ctx.params;
  const exam = examsDAO.getById(id);

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

    examsDAO.create(newExam);
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
    const exam = examsDAO.update(id, updatedExam);  

    ctx.status = 202;
    ctx.body = exam;
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
    const deletedExam = examsDAO.delete(id);
    ctx.status = 200;
    ctx.body = { message: "Esame eliminato!", exam: deletedExam };
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: "Errore durante l'eliminazione" };
  }
});

export default router;
