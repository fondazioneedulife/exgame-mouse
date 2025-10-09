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


// GET /exams/search - ricerca esami per nome (case-insensitive e sanitizzata)
router.get('/search', (ctx) => {
  const rawQuery = ctx.query.name;

  // Verifica esistenza
  if (!rawQuery) {
    ctx.status = 400;
    ctx.body = { error: "Parametro 'name' mancante" };
    return;
  }

  // Verifica tipo
  if (typeof rawQuery !== 'string') {
    ctx.status = 400;
    ctx.body = { error: "Parametro 'name' deve essere una stringa" };
    return;
  }

  // Sanitizzazione: rimuove caratteri non alfanumerici o spazi
  const searchTerm = rawQuery.replace(/[^a-zA-Z0-9\s]/g, '').toLowerCase();

  // Ricerca case-insensitive e "contains"
  const results = exams.filter(exam =>
    exam.name.toLowerCase().includes(searchTerm)
  );

  // Output (sempre array, anche vuoto)
  ctx.status = 200;
  ctx.body = results;
});

// GET /exams/time - filtra esami con max_time > min_time
router.get('/time', (ctx) => {
  const rawQuery = ctx.query.min_time;

  //Verifica esistenza
  if (!rawQuery) {
    ctx.status = 400;
    ctx.body = { error: "Parametro 'min_time' mancante" };
    return;
  }

  // Conversione in intero
  const minTime = parseInt(rawQuery as string, 10);

  // Verifica conversione e logica
  if (isNaN(minTime) || minTime <= 0) {
    ctx.status = 400;
    ctx.body = { error: "Parametro 'min_time' deve essere un numero intero positivo (secondi)" };
    return;
  }

  // Filtraggio array mock
  const results = exams.filter(exam => exam.max_time > minTime);

  // Output (sempre array, anche vuoto)
  ctx.status = 200;
  ctx.body = results;
});




export default router;
