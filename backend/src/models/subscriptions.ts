import mongoose from "mongoose";
import { Answer, QuestionType } from "../../../api/types";

export interface ISubscription {
  id: string;
  student_id: string;
  exam_id: string;
  questions: {
    id: string;
    responses: {
      id: string;
    }[];
  }[];
}

const subscriptionSchema = new mongoose.Schema<ISubscription>({
  id: { type: String, required: true, unique: true },
  student_id: { type: String, required: true },
  exam_id: { type: String, required: true },
  questions: [
    {
      id: { type: String, required: true },
      responses: [
        {
          id: { type: String, required: true },
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
