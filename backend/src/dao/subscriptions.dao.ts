import subscriptionsModel from "../models/subscriptions";
import examsModel from "../models/exams";

class SubscriptionsDAO {
    async getAll() {
        return await subscriptionsModel.find();
    }

    async getById(id: string) {
        return await subscriptionsModel.findById(id);
    }

    async create(subscriptionData: any) {
        if (!subscriptionData.exam_id || !subscriptionData.student_id) {
            throw new Error("Parametri mancanti");
        }

        const newSubscription = new subscriptionsModel(subscriptionData);
        return await newSubscription.save();
    }

    async update(id: string, subscriptionData: any) {
        const existing = await subscriptionsModel.findById(id);
        if (!existing) throw new Error("Sottoscrizione non trovata");
        return await subscriptionsModel.findByIdAndUpdate(id, subscriptionData, { new: true });
    }

    async delete(id: string) {
        const deleted = await subscriptionsModel.findByIdAndDelete(id);
        if (!deleted) throw new Error("Sottoscrizione non trovata");
        return deleted;
    }

    async calcById(id: string) {
        const subscription: any = await subscriptionsModel.findById(id).lean();
        if (!subscription) throw new Error("Sottoscrizione non trovata");

        const exam: any = await examsModel.findById(subscription.exam_id).lean();
        if (!exam) throw new Error("Esame non trovato");

        let correctCount = 0;

        for (const studentQuestion of subscription.questions || []) {
            const examQuestion = exam.questions.find(
                (q: any) => String(q._id) === String(studentQuestion.question_id)
            );

            if (!examQuestion) continue;

            for (const studentAnswer of studentQuestion.responses || []) {
                const matchingAnswer = examQuestion.answers.find(
                    (a: any) => String(a._id) === String(studentAnswer.answer_id)
                );
                if (matchingAnswer && matchingAnswer.is_correct) {
                    correctCount++;
                }
            }
        }

        const totalQuestions = exam.questions?.length || 0;
        const finalGrade = totalQuestions > 0
            ? Number(((correctCount / totalQuestions) * 10).toFixed(1))
            : 0;

        await subscriptionsModel.findByIdAndUpdate(id, { score: finalGrade });

        return { _id: id, score: finalGrade };
    }
}

export default SubscriptionsDAO;


