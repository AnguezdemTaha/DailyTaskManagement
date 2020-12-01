import mongoose from 'mongoose';
 
const messageSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },//associate msg with user
  },
  { timestamps: true },
);
 
const Message = mongoose.model('Message', messageSchema);
 
export default Message;

