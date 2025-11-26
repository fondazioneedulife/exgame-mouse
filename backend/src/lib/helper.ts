import validator from "validator";
import { exams } from "../mocks/exams";
import bcrypt from "bcryptjs";

//EXAM
export const findExamById = (id: string) => exams.find((e) => e._id === id);
export const findExamIndexById = (id: string) =>
  exams.findIndex((e) => e._id === id);

export function sanitizeSearchInput(input: string): string {
  return validator
    .escape(input) // Rimuovi caratteri potenzialmente pericolosi
    .trim() // Rimuovi spazi bianchi iniziali e finali
    .slice(0, 100); // Limita la lunghezza a 100 caratteri
}

//USER
export const hashPassword = (pw: string) => {
  return bcrypt.hash(pw, 20);
};
