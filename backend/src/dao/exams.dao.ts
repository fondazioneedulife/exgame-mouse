import examsModel from "../models/exams";

class ExamsDAO {
  async getAll() {
    return await examsModel.find();
  }

  async getById(id: string) {
    return await examsModel.findById(id);
  }

  async search(searchParam: string) {
    return await examsModel.find([
      { exam: searchParam },
      { "questions.text": searchParam },
      { "questions.answer.answer": searchParam },
    ]);
  }

  async create(examData: any) {
    const newExam = new examsModel(examData);
    return await newExam.save();
  }

  async update(id: string, updateData: any) {
    return await examsModel.findByIdAndUpdate(id, updateData, { new: true });
  }

  async delete(id: string) {
    return await examsModel.findByIdAndDelete(id);
  }
}

export default ExamsDAO;
