import Router from "@koa/router";
import { exams } from "../mocks/exams";
import validator from "validator";

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

//GET /exams/search

function sanitizeSearchInput(input: string): string {
  return validator
    .escape(input) // Rimuovi caratteri potenzialmente pericolosi
    .trim() // Rimuovi spazi bianchi iniziali e finali
    .slice(0, 100); // Limita la lunghezza a 100 caratteri
}

router.get("/search", (ctx) => {
  const { name } = ctx.query;
  if (!name) {
    ctx.status = 400;
    ctx.body = { error: "400 Bad Request" };
    return;
  }
  const searchTerm = typeof name === "string" ? name : Array.isArray(name) ? name[0] : "";
const sanitizedSearchTerm = sanitizeSearchInput(searchTerm);

  const results = exams.filter((e) =>
    e.name.toLowerCase().includes(sanitizedSearchTerm.toLowerCase()),
  );

  ctx.status = 200;
  ctx.body = {
    searchTerm: sanitizedSearchTerm,
    count: results.length,
    results: results
};
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
