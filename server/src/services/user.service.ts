// src/services/user.service.ts
import User, { IUser } from "../models/user.model";

export class UserService {
  async createUser(data: IUser) {
    const user = new User(data);
    return await user.save();
  }

  async getUserById(id: string) {
    return await User.findById(id);
  }

  async updateUser(id: string, data: Partial<IUser>) {
    return await User.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteUser(id: string) {
    return await User.findByIdAndDelete(id);
  }
}

export default new UserService();
