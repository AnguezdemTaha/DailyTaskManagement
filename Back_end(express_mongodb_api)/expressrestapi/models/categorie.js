import mongoose from 'mongoose';
 
const categorieSchema = new mongoose.Schema(
  {
    //text
    discription: {
      type: String,
      //required: true,
    },
    categorieText: {
      type: String,
      unique: true,
      //required: true,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },//associate domain with user(one to many)(just if exited: domaine not by default)

  },
  { timestamps: true },
);
 
categorieSchema.pre('remove', function(next) {
  this.model('Objective').deleteMany({ categorie: this._id }, next);
});

const Categorie = mongoose.model('Categorie', categorieSchema);
 
export default Categorie;

