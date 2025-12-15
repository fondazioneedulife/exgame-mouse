import userModel, { Iuser } from "../models/users";

class UsersDAO {
  async getAll() {
    return await userModel.find();
  }

  async getByEmail(email: string) {
    return await userModel.findOne({ email });
  }

  async create(userData: Iuser) {
    const newUser = new userModel({
      ...userData,
      role: "user",
    });
    return await newUser.save();
  }
}

export default UsersDAO;
