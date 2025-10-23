import mongoose from "mongoose";


const userSchema  = new mongoose.Schema({
      clerkId: {type:String, required:true, unique:true},
      email: {type:String, required:true, unique:true},
      photo: {type:String, required:true},
      firstNmae: {type:String},
      lastNmae: {type:String},
      creditBalance: {typr:Number ,default:5}

})

const userModel = mongoose.model.user || mongoose.model ("user", userSchema)

export default userModel;