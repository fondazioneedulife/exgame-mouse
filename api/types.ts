export type Answer = {
  _id: string;
  answer: string;
  is_correct: boolean;
};

export type QuestionType = {
  _id: string;
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

export type Response = {
  answer_id: string;
};

export type SubscriptionTypeQuestion = {
  question_id: string;
  responses:Response[];
};

export type SubscriptionType = {
  _id: string;
  exam_id: string;
  student_id: string;
  questions: SubscriptionTypeQuestion[];
}
