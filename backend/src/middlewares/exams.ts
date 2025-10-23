import { Context, Next } from "koa";
import { subscriptions } from "../mocks/subscriptions";

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

  await next();
};


export const validateSubscription = (ctx: Context, next: Next) => {
  const { exam_id, student_id: submittedQuestions } = ctx.request.body;

  //troviamo l'esame
  const exam = exam_id.find((exam) => exam._id === exam_id);

  if(!exam || !exam_id) {
    //ritorna l'errore
  }

  const invalidateQuestions = [];
  const invalidateAnswers = [];

}


//trovare l'esame nella lista dell subscriptoon e verifica che esista
//ciclare tutte le questions che ci invia l'utente e verificare che esistano (ciclo for rispetto al foreach)
//trovare tutte le ripsoste che ci invia l'utente e verificare che facciano parte dello stesso array delle answer/questions

for (const question of questions) {
  //if question non esiste, passo a continue
  if (!exam.questions.includes(question))
  continue;  
  break; // condizione di chiusure che serve a interrompere il ciclo
}