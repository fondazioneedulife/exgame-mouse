import examsModel from "../models/exams";
import userModel, { Iuser } from "../models/users";
import bcrypt from "bcryptjs";

class UsersDAO {
  async getAll() {
    return await userModel.find();
  }

  async create(userData: Iuser) {
    const newUser = new userModel({
      ...userData,
      createdAt: new Date(),
      updatedAt: new Date(),
      role: "user",
    });
    return await newUser.save();
  }
}

export default UsersDAO;
