import mongoose from "mongoose";
import { SubscriptionQuestion } from "../../../api/types";

interface ISubscription {
    id: string;
    student_id: string;
    exam_id: string;
    questions: SubscriptionQuestion[];
}

const SubscriptionSchema = new mongoose.Schema<ISubscription>(
    {
        id: { type: String, required: true, unique: true },
        student_id: { type: String, required: true },
        exam_id: { type: String, required: true },
        questions: [
            {
                question_id: { type: String, required: true },
                responses: [
                    { answer_id: { type: String, required: true } }
                ],
            },
        ],
    }
);