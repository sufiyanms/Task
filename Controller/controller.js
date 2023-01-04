import { hash } from "bcrypt";
import bcrypt from "bcrypt";
import userModel from "../model/userModel.js"

//***************new user Deatil name,number,age,pincode add in Data Base**************
const addUser=async (req,res)=>{
    try{
        const {name,number,age,pinCode,AadharNumber}=req.body;
        const doc=new userModel({
            name:name,
            number:number,
            age:age,
            pinCode:pinCode,
            AadharNumber:AadharNumber
        })
        const result=await doc.save()
        //*******new user Deatil added in Data Base**************
    }catch (err){
        console.log(err);
    }

    res.send("hello");

};

const creatAccount= (req,res)=>{
    try{
        const {number,password}=req.body;
        let saltRound=5;

        //********/ converting password into hash value*****************

        bcrypt.hash(password,saltRound,async(err,hash)=>{
            console.log(hash);

            //*******number and password save in data Base**************
            const doc=new userModel({
                number:number,
                password:hash
            });
            const result=await doc.save()

        })
        
    }catch (err){
        console.log(err);
    }

    res.send("your account is created");
}


const userLogin=(req,res)=>{
    try {
        //********/ converting password into hash value*****************

        const {number,password}=req.body;
        bcrypt.hash(password,5,async(err,hash)=>{

        //*****fetching password from data Base for comperison***********/

            const data=await userModel.find();
            const comparePassword=data[0].password;
            bcrypt.compare(password,comparePassword,(err,result)=>{

                if(result){
                    res.send("login successfull");
                }else{
                    res.send("password is wrong");
                }
            })
        })
        
    } catch (error) {
        console.log(error)
        
    }
}

    //*****total user register Detail for admin***********/
const totalUserRegister=async (req,res)=>{
    try {
        const data=await userModel.find();
        res.json(data);
        
    } catch (error) {
        console.log(error);
        
    }
};






export { addUser,creatAccount,userLogin,totalUserRegister};