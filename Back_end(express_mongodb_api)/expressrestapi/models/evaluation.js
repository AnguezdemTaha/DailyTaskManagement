import mongoose from 'mongoose';
 
const evaluationSchema = new mongoose.Schema(
  {
    //text
    discription: {
      type: String,
      //required: true,
    },
    note: {
        type: Number, //i think it is (to look) : we nneed type list
        //required: true,
      },
    //user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },//the user who done the evaluation
    //on va le faire lorsque on a plusieur evaluation pour le meme objective
    //objective: { type: mongoose.Schema.Types.ObjectId, ref: 'Objective' },//th task which the evaluation is done
  },
  { timestamps: true },
);
 
const Evaluation = mongoose.model('Evaluation', evaluationSchema);
 
export default Evaluation;

