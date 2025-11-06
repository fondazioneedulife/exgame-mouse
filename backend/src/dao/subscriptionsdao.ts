import subscriptionModel from "../models/subscriptions";

class SubsctiptionsDao {
    async getAll() {
        return await subscriptionModel.find();
    } 

    async getSubscription(subId: string) {
        return await subscriptionModel.findOne({subId});
    } 

    async addSub(newSub: string) {
        return await subscriptionModel.create({newSub});
    }

    async deleteSub(index: Number) {
        return await subscriptionModel.deleteOne({index});
    }
};

export default SubsctiptionsDao;