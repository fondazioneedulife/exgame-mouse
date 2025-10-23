import type { ExamType } from "../../../api/types";
import { questions } from "./questions";

export const exams: ExamType[] = [
  {
    _id: "exam_001",
    name: "Quiz Generale 1",
    schedule_date: "2025-01-15",
    max_time: 1800,
    questions: questions,
  },
];
