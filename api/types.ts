export type Answer = {
  _id: AnswerId;
  answer: string;
  is_correct: boolean;
};

export type QuestionType = {
  _id: QuestionId;
  text: string;
  type: string;
  answers: Answer[];
};

export type ExamType = {
  _id: string;
  name: string;
  schedule_date: string;
  max_time: number;
  questions: QuestionType[];
};

export type QuestionComponentProp = QuestionType & {
  response: string;
  setReponse: (value: string) => void;
};

export type QuestionId = string;
export type AnswerId = string;

export type SubscriptionType = {
  _id: string;
  exam_id: string;
  student_id: string;
  status: "to-do" | "completed";
  grade: number | null;
  questions: SubscriptionQuestion[];
};

export type SubscriptionQuestion = {
  question_id: QuestionId;
  responses: SubscriptionAnswer[];
};

export type SubscriptionAnswer = {
  answer_id: AnswerId;
};

export type User = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  role: "user" | "teacher" | "admin";
  data: any;
};
