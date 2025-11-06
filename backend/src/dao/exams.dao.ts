import examsModel from "../models/exams";

class ExamsDao {
    async getAll() {
        return await examsModel.find({});
    }
    async getById(id: string) {
        return await examsModel.findById(id);
    }
    async create(exam: any) {
        return await examsModel.create(exam);
    }
    async update(id: string, exam: any) {
        return await examsModel.findByIdAndUpdate(id, exam, { new: true });
    }
    async delete(id: string) {
        return await examsModel.findByIdAndDelete(id);
    }
}

export default ExamsDao;
