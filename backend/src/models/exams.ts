import mongoose from "mongoose";
//import type * as mongooseType from "mongoose";
// mock per testare anche senza avere mongoose installato
//let mongoose: typeof mongooseType | any;
//try {
//  mongoose = await import("mongoose");
//} catch {
//  mongoose = {
//    Schema: class MockSchema {
//      constructor(public definition: any) {}
//    },
//    model: (name: string, schema: any) => ({ name, schema }),
//  };
//}

interface IExams {
  id: string;
  name: string;
  created_at: Date;
  updated_at: Date;
  created_by: number;
  schedule_date: Date;
  max_time: number;
  questions: {
    question_id: string;
    text: string;
    type: string;
    answers: {
      answer_id: string;
      text: string;
      is_correct: boolean;
    }[];
  }
}

const examsSchema = new mongoose.Schema<IExams>({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  created_by: { type: Number, required: true },
  schedule_date: { type: Date, required: true },
  max_time: { type: Number, required: true },
  questions: [
    {
      question_id: { type: String, required: true },
      text: { type: String, required: true },
      type: { type: String, required: true },
      answers: [
        {
          answer_id: { type: String, required: true },
          text: { type: String, required: true },
          is_correct: { type: Boolean, required: true },
        },
      ],
    },
  ],
});

const examsModel = mongoose.model<IExams>("Exams", examsSchema);

export default examsModel;
