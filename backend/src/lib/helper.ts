import validator from "validator";
import { exams } from "../mocks/exams";
import { subscriptions } from "../mocks/subscriptions";

export const findExamById = (id: string) => exams.find((e) => e._id === id);
export const findExamIndexById = (id: string) => exams.findIndex((e) => e._id === id);
export const findExamIdBySubId = (id: string) => subscriptions.find((s) => exams.find((e) => s.exam_id === e._id));
export const findSubById = (id: string) => subscriptions.find((s) => s._id === id);

export function sanitizeSearchInput(input: string): string {
  return validator
    .escape(input) // Rimuovi caratteri potenzialmente pericolosi
    .trim() // Rimuovi spazi bianchi iniziali e finali
    .slice(0, 100); // Limita la lunghezza a 100 caratteri
}
