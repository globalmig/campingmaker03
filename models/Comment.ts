import mongoose, { Model } from 'mongoose';

export interface IComment extends Document {
  inquiryId: mongoose.Types.ObjectId;
  writer: string;
  content: string;
  createdAt: Date;
}

const CommentSchema = new mongoose.Schema({
  inquiryId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Inquiry',
  },
  writer: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Comment: Model<IComment> = mongoose.models.Comment || mongoose.model<IComment>('Comment', CommentSchema);


export default Comment;
