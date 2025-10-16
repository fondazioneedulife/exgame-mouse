import type { SubscriptionType } from "../../../api/types";

const STUDENT_1 = "student_abc123";
const STUDENT_2 = "student_def456";
const STUDENT_3 = "student_ghi789";

export const subscriptions: SubscriptionType[] = [
  // Studente 1 iscritto a 3 esami (001, 002, 003)
  {
    _id: "sub_001",
    exam_id: "exam_001",
    student_id: STUDENT_1,
    status: "completed",
    grade: 85,
    questions: [
      { question_id: "q_001", responses: [{ answer_id: "a_001_1" }] },
      { question_id: "q_002", responses: [{ answer_id: "a_002_1" }] },
      { question_id: "q_003", responses: [{ answer_id: "a_003_1" }] },
      { question_id: "q_004", responses: [{ answer_id: "a_004_1" }] },
      { question_id: "q_005", responses: [{ answer_id: "a_005_1" }] },
    ],
  },
  {
    _id: "sub_002",
    exam_id: "exam_002",
    student_id: STUDENT_1,
    status: "to-do",
    grade: null,
    questions: [
      { question_id: "q_006", responses: [] },
      { question_id: "q_007", responses: [] },
      { question_id: "q_008", responses: [] },
      { question_id: "q_009", responses: [] },
      { question_id: "q_010", responses: [] },
    ],
  },
  {
    _id: "sub_003",
    exam_id: "exam_003",
    student_id: STUDENT_1,
    status: "completed",
    grade: 92,
    questions: [
      { question_id: "q_001", responses: [{ answer_id: "a_001_1" }] },
      { question_id: "q_003", responses: [{ answer_id: "a_003_1" }] },
      { question_id: "q_005", responses: [{ answer_id: "a_005_1" }] },
      { question_id: "q_007", responses: [{ answer_id: "a_007_1" }] },
      { question_id: "q_009", responses: [{ answer_id: "a_009_1" }] },
    ],
  },

  // Studente 2 iscritto a 2 esami (002, 004)
  {
    _id: "sub_004",
    exam_id: "exam_002",
    student_id: STUDENT_2,
    status: "completed",
    grade: 78,
    questions: [
      { question_id: "q_006", responses: [{ answer_id: "a_006_1" }] },
      { question_id: "q_007", responses: [{ answer_id: "a_007_1" }] },
      { question_id: "q_008", responses: [{ answer_id: "a_008_1" }] },
      { question_id: "q_009", responses: [{ answer_id: "a_009_1" }] },
      { question_id: "q_010", responses: [{ answer_id: "a_010_1" }] },
    ],
  },
  {
    _id: "sub_005",
    exam_id: "exam_004",
    student_id: STUDENT_2,
    status: "to-do",
    grade: null,
    questions: [
      { question_id: "q_002", responses: [] },
      { question_id: "q_004", responses: [] },
      { question_id: "q_006", responses: [] },
      { question_id: "q_008", responses: [] },
      { question_id: "q_010", responses: [] },
    ],
  },

  // Studente 3 iscritto a 2 esami (001, 005)
  {
    _id: "sub_006",
    exam_id: "exam_001",
    student_id: STUDENT_3,
    status: "to-do",
    grade: null,
    questions: [
      { question_id: "q_001", responses: [] },
      { question_id: "q_002", responses: [] },
      { question_id: "q_003", responses: [] },
      { question_id: "q_004", responses: [] },
      { question_id: "q_005", responses: [] },
    ],
  },
  {
    _id: "sub_007",
    exam_id: "exam_005",
    student_id: STUDENT_3,
    status: "completed",
    grade: 88,
    questions: [
      { question_id: "q_002", responses: [{ answer_id: "a_002_1" }] },
      { question_id: "q_004", responses: [{ answer_id: "a_004_1" }] },
      { question_id: "q_006", responses: [{ answer_id: "a_006_1" }] },
      { question_id: "q_008", responses: [{ answer_id: "a_008_1" }] },
      { question_id: "q_010", responses: [{ answer_id: "a_010_1" }] },
    ],
  },
];