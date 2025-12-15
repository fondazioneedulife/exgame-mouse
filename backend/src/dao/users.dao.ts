import userModel, { Iuser } from "../models/users";

export default class UsersDAO {
  async getAll() {
    return await userModel.find();
  }

  async findByEmail(email: string) {
    return await userModel.findOne({ email });
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
