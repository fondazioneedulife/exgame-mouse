import subscriptionModel from "../models/subscriptions";

class SubscriptionsDao {
    async getAll() {
        return await subscriptionModel.find({});
    }
    async getById(id: string) {
        return await subscriptionModel.findById(id);
    }
    async create(subscription: any) {
        return await subscriptionModel.create(subscription);
    }
    async update(id: string, subscription: any) {
        return await subscriptionModel.findByIdAndUpdate(id, subscription, { new: true });
    }
    async delete(id: string) {
        return await subscriptionModel.findByIdAndDelete(id);
    }
}

export default SubscriptionsDao;