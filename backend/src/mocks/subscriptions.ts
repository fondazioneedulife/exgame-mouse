import type { SubscriptionType } from "../../../api/types";

export const subscriptions: SubscriptionType[] = [
  {
    _id: "sub_001",
    exam_id: "exam_001",
    student_id: "student_001",
    status: "to-do",
    grade: 0,
    questions: [
      { question_id: "q_001", responses: [{ answer_id: "a_001_1" }] },
      { question_id: "q_002", responses: [{ answer_id: "a_002_1" }] },
      { question_id: "q_003", responses: [{ answer_id: "a_003_1" }] },
      { question_id: "q_004", responses: [{ answer_id: "a_004_1" }] },
      { question_id: "q_005", responses: [{ answer_id: "a_005_1" }] },
      { question_id: "q_006", responses: [{ answer_id: "a_006_1" }] },
      { question_id: "q_007", responses: [{ answer_id: "a_007_1" }] },
      { question_id: "q_008", responses: [{ answer_id: "a_008_1" }] },
      { question_id: "q_009", responses: [{ answer_id: "a_009_1" }] },
      { question_id: "q_010", responses: [{ answer_id: "a_010_1" }] },
    ],
  },
];
