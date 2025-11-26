import mongoose from "mongoose";
import examsModel from "../models/exams";
import usersModel from "../models/users";
import subscriptionModel from "../models/subscriptions";
import { ObjectId } from "mongodb";
import { questions } from "../mocks/questions";

mongoose.connect("mongodb://localhost:27017/exgame");

const conn = mongoose.connection;

examsModel.deleteMany({});
usersModel.deleteMany({});
subscriptionModel.deleteMany({});

conn.collection('users').insertOne({
    _id: new ObjectId("student_001"),
    first_name: "Mario",
    last_name: "Rossi",
    email: "mario.rossi@example.com",
    password: "mariottini123",
    image: "https://example.com/images/mario_rossi.png",
    createdAt: new Date(),
    updatedAt: new Date(),
    role: "user",
    data: {},
});

conn.collection('exams').insertMany([
    {
        _id: new ObjectId("exam_001"),
        name: "Quiz Generale 1",
        schedule_date: "2025-01-15",
        max_time: 1800,
        questions: questions,
    },
    {
        _id: new ObjectId("exam_002"),
        name: "Quiz Generale 2",
        schedule_date: "2025-01-6",
        max_time: 3600,
        questions: questions,
    },
    {
        _id: new ObjectId("exam_003"),
        name: "Quiz Generale 3",
        schedule_date: "2025-01-17",
        max_time: 2700,
        questions: questions,
    },
    {
        _id: new ObjectId("exam_004"),
        name: "Quiz Generale 4",
        schedule_date: "2025-01-22",
        max_time: 7200,
        questions: questions,
    },
    {
        _id: new ObjectId("exam_005"),
        name: "Quiz Generale 5",
        schedule_date: "2025-01-31",
        max_time: 10800,
        questions: questions,
    },
]);

conn.collection('subscriptions').insertMany([
    {
        _id: new ObjectId("sub_001"),
        exam_id: "exam_001",
        student_id: "student_001",
        status: "to-do",
        grade: 0,
        questions: [
        { question_id: "q_001", responses: [{ answer_id: "a_001_1" }] },
        { question_id: "q_002", responses: [{ answer_id: "a_002_1" }] },
        { question_id: "q_003", responses: [{ answer_id: "a_003_1" }] },
        { question_id: "q_004", responses: [{ answer_id: "a_004_1" }] },
        { question_id: "q_005", responses: [{ answer_id: "a_005_1" }] },
        { question_id: "q_006", responses: [{ answer_id: "a_006_1" }] },
        { question_id: "q_007", responses: [{ answer_id: "a_007_1" }] },
        { question_id: "q_008", responses: [{ answer_id: "a_008_1" }] },
        { question_id: "q_009", responses: [{ answer_id: "a_009_1" }] },
        { question_id: "q_010", responses: [{ answer_id: "a_010_1" }] },
        ],
    }
]);

mongoose.disconnect();