import examsModel from "../models/exams";
import userModel, { Iuser } from "../models/users";
import bcrypt from "bcryptjs";

class UsersDAO {
  async create(userData: Iuser) {
    const newUser = new userModel(userData);
    return await newUser.save();
  }
}

export default UsersDAO;
