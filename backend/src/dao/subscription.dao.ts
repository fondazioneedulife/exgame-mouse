import subscriptionModel from "../models/subscriptions";

class SubscriptionDAO {
  async getAll() {
    return await subscriptionModel.find();
  }

  async getById(id: string) {
    return await subscriptionModel.findById(id);
  }

  async create(data: any) {
    const newSubscription = new subscriptionModel(data);
    return await newSubscription.save();
  }

  async update(id: string, updateData: any) {
    return await subscriptionModel.findByIdAndUpdate(id, updateData, {
      new: true,
    });
  }

  async delete(id: string) {
    return await subscriptionModel.findByIdAndDelete(id);
  }
}
export default SubscriptionDAO;
