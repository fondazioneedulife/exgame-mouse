// Exam Routes
// GET api/exams getAll
// GET api/exams/:id getById
// GET api/exams/search search
// POST api/exams/new create
// PATCH api/exams/update/:id update
// DELETE api/exams/:id delete

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
router.get("/", async (ctx) => {
  const exams = await examsDAO.getAll();
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
  const sanitizedSearchTerm = sanitizeSearchInput(searchTerm);

  try {
    const results = await examsDAO.search(sanitizedSearchTerm);
    ctx.status = 200;
    ctx.body = {
      searchTerm: sanitizedSearchTerm,
      count: results.length,
      results: results,
    };
  } catch (err) {
    ctx.status = 500;
    ctx.body = { err: "Errore durante la richiesta" };
  }
});

router.get("/time", (ctx) => {
  const minTime = parseInt(ctx.query.min_time as string) || 0;

  if (!minTime || isNaN(minTime) || minTime < 0) {
    ctx.status = 400;
    ctx.body = { error: "Parametro 'min_time' mancante o non valido" };
    return;
  }
  const filtered = exams.filter((exam) => exam.max_time > minTime);
  ctx.status = 200;
  ctx.body = filtered;
});

// GET /exams/:id - dettaglio di un singolo esame
router.get("/:id", async (ctx) => {
  const { id } = ctx.params;
  const exam = await examsDAO.getById(id);

  if (!exam) {
    ctx.status = 404;
    ctx.body = { error: `Exam with id ${id} not found` };
    return;
  }

  ctx.status = 200;
  ctx.body = exam;
});

// POST /exams/new - crea un nuovo esame
router.post("/new", async (ctx) => {
  try {
    const newExam = await examsDAO.create(ctx.request.body);

    if (!newExam || !newExam._id) {
      ctx.status = 400;
      ctx.body = { error: "Missing required exam data (_id required)" };
      return;
    }

    // exams.push(newExam);
    ctx.status = 201;
    ctx.body = newExam;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: "Errore durante la creazione" };
  }
});

// PATCH /exams/update/:id - aggiorna un esame
router.patch("/update/:id", async (ctx) => {
  const { id } = ctx.params;

  try {
    const updatedExam = await examsDAO.update(id, ctx.request.body);
    ctx.status = 202;
    ctx.body = updatedExam;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: "Errore durante l'aggiornamento" };
  }
});

// DELETE /exams/:id - elimina un esame
router.delete("/:id", async (ctx) => {
  const { id } = ctx.params;

  try {
    const deletedExam = await examsDAO.delete(id);
    ctx.status = 200;
    ctx.body = { message: "Esame eliminato!", exam: deletedExam };
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: "Errore durante l'eliminazione" };
  }
});

export default router;
