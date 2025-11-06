import examsModel from "../models/exams";

class ExamsDao {
    async getAll() {
        return await examsModel.find({});
    }
}

export default ExamsDao;