import userModel from "../models/users";

class UserDAO {

  async create(data: any) {
    const newUser = new userModel(data);
    return await newUser.save();
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
