import userModel from "../models/users";

class UserDAO {
 
  async getById(id: string) {
    return await userModel.findById(id);
  }

  async create(data: any) {
    const newUser = new userModel(data);
    return await newUser.save();
  }
}

export default UserDAO;
