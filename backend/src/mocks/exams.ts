import type { ExamType } from "../../../api/types";
import { questions } from "./questions";


function getRandomQuestions(count: number) {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export const exams: ExamType[] = [
  {
    _id: "exam_001",
    name: "Quiz Generale 1",
    schedule_date: "2025-01-15",
    max_time: 1800,
    questions: getRandomQuestions(5),
  },
  {
    _id: "exam_002",
    name: "Quiz Generale 2",
    schedule_date: "2025-02-10",
    max_time: 1800,
    questions: getRandomQuestions(5),
  },
  {
    _id: "exam_003",
    name: "Quiz Generale 3",
    schedule_date: "2025-03-05",
    max_time: 1800,
    questions: getRandomQuestions(5),
  },
  {
    _id: "exam_004",
    name: "Quiz Generale 4",
    schedule_date: "2025-04-20",
    max_time: 1800,
    questions: getRandomQuestions(5),
  },
  {
    _id: "exam_005",
    name: "Quiz Generale 5",
    schedule_date: "2025-05-12",
    max_time: 1800,
    questions: getRandomQuestions(5),
  },
];


