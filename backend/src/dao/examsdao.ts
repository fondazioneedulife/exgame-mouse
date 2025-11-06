import examsModel from "../models/exams";
import validator from "validator";

class ExamsDao {
    async getAll() {
        return await examsModel.find();
    }

    async getById(id: string) {
        return await examsModel.findOne({id});
    }

    async deleteExam(index: Number) {
        return await examsModel.deleteOne({index});
    }

    async addExam(newExam: string) {
        return await examsModel.create({newExam});
    }

    async filterExams(maxTime: Number, minTime: Number) {
        return await examsModel.find({max_time: { $gt: minTime, $lt: maxTime }});
    }

    async sanitizeSearchInput(searchTerm: string) {
        return validator
            .escape(searchTerm) // Rimuovi caratteri potenzialmente pericolosi
            .trim() // Rimuovi spazi bianchi iniziali e finali
            .slice(0, 100); // Limita la lunghezza a 100 caratteri
    }
};

export default ExamsDao;