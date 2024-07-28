import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    nom:{type:String, required:true},
    username:{type:String, required:true},
    password:{type:String, required:true}
})

const userModel = mongoose.model.user || mongoose.model("user", userSchema);

export default userModel;