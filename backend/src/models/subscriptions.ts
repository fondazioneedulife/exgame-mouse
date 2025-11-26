import mongoose from "mongoose";
import { Answer, QuestionType } from "../../../api/types";

export interface ISubscription {
  _id: string;
  student_id: string;
  exam_id: string;
  questions: {
    _id: string;
    responses: {
      _id: string;
    }[];
  }[];
}

const subscriptionSchema = new mongoose.Schema<ISubscription>({
  _id: { type: String, required: true, unique: true },
  student_id: { type: String, required: true },
  exam_id: { type: String, required: true },
  questions: [
    {
      _id: { type: String, required: true },
      responses: [
        {
          _id: { type: String, required: true },
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
