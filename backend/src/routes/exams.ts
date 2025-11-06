import Router from "@koa/router";
import { exams } from "../mocks/exams";
import ExamsDao from "../dao/examsDao";
import { findExamIndexById } from "../lib/helper";

const router = new Router({
  prefix: "/api/exams",
});

const examsDao = new ExamsDao();

// ---- Routes ----

// GET /exams - lista di tutti gli esami
router.get("/", async (ctx) => {
  const result = await examsDao.getAll();
  ctx.status = 200;
  ctx.body = result;
});

router.get("/search", async (ctx) => {
  const { name } = ctx.query;
  if (!name) {
    ctx.status = 400;
    ctx.body = { error: "400 Bad Request" };
    return;
  }
  const searchTerm = typeof name === "string" ? name : Array.isArray(name) ? name[0] : "";
  const sanitizedSearchTerm = await examsDao.sanitizeSearchInput(searchTerm);

  const results = exams.filter((exam) => {
    if (exam.name.toLowerCase().includes(sanitizedSearchTerm.toLowerCase()))
      return true;

    if (
      exam.questions.some((q) =>
        q.text.toLowerCase().includes(sanitizedSearchTerm.toLowerCase()),
      )
    )
      return true;

    if (
      exam.questions.some((q) =>
        q.answers.some((a) =>
          a.answer.toLowerCase().includes(sanitizedSearchTerm.toLowerCase()),
        ),
      )
    )
      return true;

    return false;
  });

  ctx.status = 200;
  ctx.body = {
    searchTerm: sanitizedSearchTerm,
    count: results.length,
    results: results,
  };
});

router.get("/time", async (ctx) => {
  const minTime = parseInt(ctx.query.min_time as string) || 0;
  const maxTime = parseInt(ctx.query.min_time as string) || 100;

  if (!minTime || isNaN(minTime) || minTime < 0) {
    ctx.status = 400;
    ctx.body = { error: "Parametro 'min_time' mancante o non valido" };
    return;
  }
  const filtered = await examsDao.filterExams(maxTime, minTime);
  ctx.status = 200;
  ctx.body = filtered;
});

// GET /exams/:id - dettaglio di un singolo esame
router.get("/:id", async (ctx) => {
  const { id } = ctx.params;
  const exam = await examsDao.getById(id);

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
    const newExam = ctx.request.body;

    if (!newExam || !newExam._id) {
      ctx.status = 400;
      ctx.body = { error: "Missing required exam data (_id required)" };
      return;
    }

    const examsUpdated = await examsDao.addExam(newExam);
    ctx.status = 201;
    ctx.body = newExam;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: "Errore durante la creazione" };
  }
});

// PATCH /exams/update/:id - aggiorna un esame esistente
router.patch("/update/:id", async (ctx) => {
  const { id } = ctx.params;
  const index = findExamIndexById(id);  //da fare anche questo?

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
router.delete("/:id", async (ctx) => {
  const { id } = ctx.params;
  const index = findExamIndexById(id);   //da fare anche questo?

  if (index === -1) {
    ctx.status = 404;
    ctx.body = { error: "Esame non trovato!" };
    return;
  }

  try {
    const deletedExam = await examsDao.deleteExam(index);
    ctx.status = 200;
    ctx.body = { message: "Esame eliminato!", exam: deletedExam };
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: "Errore durante l'eliminazione" };
  }
});

export default router;
