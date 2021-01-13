import mongoose from 'mongoose';
 
const objectiveSchema = new mongoose.Schema(
  {
    //text
    discription: {
      type: String,
      //required: true,
    },
    objectiveText: {
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
    
    //user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },//associate task with user(one to many)
    categorie: { type: mongoose.Schema.Types.ObjectId, ref: 'Categorie' },//associate task with domain(one to many)
    //cas d'une seaul evaluation pour un objective
    evaluation: { type: mongoose.Schema.Types.ObjectId, ref: 'Evaluation' },
  },
  { timestamps: true },
);
 
objectiveSchema.pre('remove', function(next) {
  this.model('Evaluation').deleteMany({ objective: this._id }, next);
});

const Objective = mongoose.model('Objective', objectiveSchema);
 
export default Objective;

