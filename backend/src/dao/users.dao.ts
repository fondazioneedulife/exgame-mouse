import bcrypt from "bcryptjs";
import userModel, { Iuser } from "../models/users";

class UsersDAO {
  async getAll() {
    return await userModel.find();
  }

  async create(userData: Iuser) {
    const password = await bcrypt.hash(userData.password, 10);
    const newUser = new userModel({
      ...userData,
      password,
      createdAt: new Date(),
      updatedAt: new Date(),
      role: "user",
    });
    return await newUser.save();
  }
}

export default UsersDAO;
