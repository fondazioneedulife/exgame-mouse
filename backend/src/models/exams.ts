import mongoose from "mongoose";

interface IExam {
  _id: string;
  name: string;
  created_at: Date;
  updated_at: Date;
  created_by: string;
  schedule_date: Date;
  max_time: number;
  questions: IQuestion[];
}

interface IQuestion {
  _id: string;
  text: string;
  type: string;
  answers: IAnswer[];
}

interface IAnswer {
  _id: string;
  answer: string;
  is_correct: boolean;
}

const questionSchema = new mongoose.Schema<IQuestion>({
  _id: { type: String, required: true },
  text: { type: String, required: true },
  type: { type: String, required: true },
  answers: [
    {
      _id: { type: String, required: true },
      answer: { type: String, required: true },
      is_correct: { type: Boolean, required: true },
    },
  ],
});

const examSchema = new mongoose.Schema<IExam>({
  _id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  created_at: { type: Date, required: true },
  updated_at: { type: Date, required: true },
  created_by: { type: String, required: true },
  schedule_date: { type: Date, required: true },
  max_time: { type: Number, required: true },
  questions: [questionSchema],
});

export const examModel = mongoose.model<IExam>("Exam", examSchema);
