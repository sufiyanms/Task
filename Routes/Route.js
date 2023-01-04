import  express  from "express";
import { addUser ,creatAccount,userLogin,totalUserRegister} from "../Controller/controller.js";
const userRoutes=express.Router();

userRoutes.post("/adduser",addUser);
userRoutes.post("/creatAccount",creatAccount);
userRoutes.post("/login",userLogin);
userRoutes.get("/totalUserRegister",totalUserRegister)


export default userRoutes;