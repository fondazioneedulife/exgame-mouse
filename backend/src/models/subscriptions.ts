import mongoose from "mongoose";
import { Answer, QuestionType } from "../../../api/types";

interface ISubscription {
  _id: number;
  student_id: string;
  exam_id: string;
  questions: {
    question_id: string;
    responses: {
      answer_id: string;
    }[];
  }[];
}

const subscriptionSchema = new mongoose.Schema<ISubscription>({
  _id: { type: Number, required: true, unique: true },
  student_id: { type: String, required: true },
  exam_id: { type: String, required: true },
  questions: [
    {
      question_id: { type: String, required: true },
      responses: [
        {
          answer_id: { type: String, required: true },
        },
      ],
    },
  ],
});

const subscriptionModel = mongoose.model<ISubscription>(
  "Subscription",
  subscriptionSchema
);

export default subscriptionModel;
