import userModel from "../models/users";

class UserDAO {

  async create(data: any) {
    const newUser = new userModel(data);
    return await newUser.save();
  }
  async getAll() {
    return await userModel.find();
  }

  async getById(id: string) {
    return await userModel.findById(id);
  }

  async delete(id: string) {
    return await userModel.findByIdAndDelete(id);
  }
  async update(id: string, data: any) {
    return await userModel.findByIdAndUpdate(id, data, { new: true });
  }

  // async getMe() {
  //   return await ;
  // }

  // async login() {
  //   return await  };
  // }

  // async logout (id: string) {
  // return await ;
  // }
}

export default UserDAO;
