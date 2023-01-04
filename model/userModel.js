import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{type:String, require:true },
    number:{type:Number},
    age:{type:Number},
    pinCode:{type:Number},
    AadharNumber:{type:Number},
    password:{}
});


const userModel=mongoose.model("adduser",userSchema);




export default userModel;