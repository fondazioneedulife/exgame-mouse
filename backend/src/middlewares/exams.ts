import { Context, Next } from "koa";
import { subscriptions } from "../mocks/subscriptions";
import { exams } from "../mocks/exams";
import { questions } from "../mocks/questions";

export const examsMiddleware = async (ctx: Context, next: Next) => {
  const { exam_id, student_id } = ctx.request.body;

  if (!exam_id) {
    ctx.status = 400;
    ctx.body = { error: "Parametro 'exam_id' mancante" };
    return;
  }

  if (!student_id) {
    ctx.status = 400;
    ctx.body = { error: "Parametro 'student_id' mancante" };
    return;
  }

  // Controlla se lo studente ha già registrato l'esame
  const studentYetRegistered = subscriptions.some(
    (sub) => sub.exam_id === exam_id && sub.student_id === student_id,
  );

  if (studentYetRegistered) {
    ctx.status = 400;
    ctx.body = { error: "Esame già registrato da questo studente" };
    return;
  }

    //se esiste l'esame si cicla con un for tutte le questions e verifichiamo che esistono
    //trova tutte le risposte che ci invia l'utente e vwerificare cche facciano parte dello stesso array delle answer/questions dell'esame

  const exam = exams.find((e) => e._id === exam_id);
  
  if (!exam) {
    ctx.status = 404;
    ctx.body = { error: "Esame non trovato" };
    return;
  }


for (const question of exam.questions) { // ciclo sulle domande dell'esame
  // trovo la domanda nella banca dati globale
  const questionExists = questions.find(q => q._id === question._id);

  if (!questionExists) {
    console.error(`Domanda con id ${question._id} non esiste nella banca dati`);
    continue; // passa alla prossima domanda
  }

  // ciclo sulle risposte della domanda dell'esame
  for (const answer of question.answers) {
    const answerExist = questionExists.answers.find(a => a._id === answer._id);

    if (!answerExist) {
      console.error(`Risposta ${answer._id} non valida per la domanda ${question._id}`);
      continue; // passa alla prossima risposta
    }
  }
}






  await next();
};

