import mongoose from 'mongoose';
 
const taskSchema = new mongoose.Schema(
  {
    //text
    discription: {
      type: String,
      //required: true,
    },
    start_date: {
      type: Date,
      //required: true,
    },
    end_date: {
      type: Date,
      //required: true,
    },
    type: {
      type: String,
      //required: true,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },//associate task with user(one to many)
    domain: { type: mongoose.Schema.Types.ObjectId, ref: 'Domain' },//associate task with domain(one to many)
    evaluation: { type: mongoose.Schema.Types.ObjectId, ref: 'Evaluation' },
  },
  { timestamps: true },
);
 
const Task = mongoose.model('Task', taskSchema);
 
export default Task;

