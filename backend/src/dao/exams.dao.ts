import examsModel from "../models/exams";

class ExamsDAO {
    async getAll() {
        return await examsModel.find();
    }

    async getById(id: string) {
        return await examsModel.findById(id);
    }

    async search(searchTerm: string) {
        return await examsModel.find({
            $or: [
                { name: { $regex: searchTerm, $options: "i" } },
                { "questions.text": { $regex: searchTerm, $options: "i" } },
                { "questions.answers.answer": { $regex: searchTerm, $options: "i" } },
            ],
        });
    }

    async create(examData: any) {
        const newExam = new examsModel(examData);
        return await newExam.save();
    }

    async update(id: string, examData: any) {
        return await examsModel.findByIdAndUpdate(id, examData, { new: true });
    }
    async delete(id: string) {
        return await examsModel.findByIdAndDelete(id);
    }
}
export default ExamsDAO;