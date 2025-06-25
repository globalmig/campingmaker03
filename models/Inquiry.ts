// models/Inquiry.ts
import mongoose, { Schema, Document, model, models } from 'mongoose';

export interface IInquiry extends Document {
  title: string;
  name: string;
  content: string;
  password: string;
  createdAt: Date;
}

const InquirySchema = new Schema<IInquiry>(
  {
    title: { type: String, required: true },
    name: { type: String, required: true },
    content: { type: String, required: true },
    password: { type: String },
  },
  { timestamps: true }
);

const Inquiry = models.Inquiry || model<IInquiry>('Inquiry', InquirySchema);
export default Inquiry;
