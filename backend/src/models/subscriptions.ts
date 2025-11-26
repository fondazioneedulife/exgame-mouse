import mongoose, { Document, Schema } from 'mongoose';

interface IResponse {
  answer_id: string;
}

interface ISubscriptionQuestion {
  question_id: string;
  responses: IResponse[];
}

export interface ISubscriptionDoc extends Document {
  student_id: mongoose.Types.ObjectId; // ref to User
  exam_id: mongoose.Types.ObjectId; // ref to Exams
  questions: ISubscriptionQuestion[];
  createdAt?: Date;
  updatedAt?: Date;
}

const ResponseSchema = new Schema<IResponse>({
  answer_id: { type: String, required: true },
}, { _id: false });

const SubscriptionQuestionSchema = new Schema<ISubscriptionQuestion>({
  question_id: { type: String, required: true },
  responses: { type: [ResponseSchema], default: [] },
}, { _id: false });

const subscriptionSchema: Schema = new Schema<ISubscriptionDoc>({
  student_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  exam_id: { type: Schema.Types.ObjectId, ref: 'Exams', required: true },
  questions: { type: [SubscriptionQuestionSchema], default: [] },
}, {
  timestamps: true,
});

const subscriptionModel = mongoose.model<ISubscriptionDoc>('Subscription', subscriptionSchema);
export default subscriptionModel;