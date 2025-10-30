import mongoose from "mongoose";
import { QuestionType } from "../../../api/types";

interface IExam {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    schedule_date: string;
    max_time: number;
    questions: QuestionType[];
}

const examSchema = new mongoose.Schema<IExam>(
    {
        id: { type: String, required: true, unique: true },
        name: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
        createdBy: { type: String, required: true },
        schedule_date: { type: String, required: true },
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
                        type: { type: String, required: true },
                        is_correct: { type: Boolean, required: true },
                    }
                ],
            }
        ],
    },
);