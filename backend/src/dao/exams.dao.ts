import examsModel from "../models/exams";

class ExamsDAO {
  async getAll() {
    return await examsModel.find();
  }
}

export default ExamsDAO;