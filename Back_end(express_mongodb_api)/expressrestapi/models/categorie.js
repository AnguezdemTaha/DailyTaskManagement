import mongoose from 'mongoose';
 
const categorieSchema = new mongoose.Schema(
  {
    //text
    discription: {
      type: String,
      //required: true,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },//associate domain with user(one to many)(just if exited: domaine not by default)

  },
  { timestamps: true },
);
 
const Categorie = mongoose.model('Categorie', categorieSchema);
 
export default Categorie;

