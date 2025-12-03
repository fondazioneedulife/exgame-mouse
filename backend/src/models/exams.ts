import mongoose from "mongoose";

export interface IExams {
  id: string;
  name: string;
  created_at: Date;
  updated_at: Date;
  created_by: string;
  schedule_date: Date;
  max_time: number;
  questions: {
    id: string;
    text: string;
    type: string;
    answers: {
      id: string;
      answer: string;
      is_correct: boolean;
    }[];
  }[];
}

const examsSchema = new mongoose.Schema<IExams>({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  created_by: { type: String, required: true },
  schedule_date: { type: Date, required: true },
  max_time: { type: Number, required: true },
  questions: [
    {
      id: { type: String, required: true },
      text: { type: String, required: true },
      type: { type: String, required: true },
      answers: [
        {
          id: { type: String, required: true },
          answer: { type: String, required: true },
          is_correct: { type: Boolean, required: true },
        },
      ],
    },
  ],
});

const examsModel = mongoose.model<IExams>("Exams", examsSchema);

export default examsModel;
