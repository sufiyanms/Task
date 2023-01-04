import mongoose from "mongoose";

// const DB='mongodb+srv://dbuser:sufiyan@123:@cluster0.da4omqm.mongodb.net/?retryWrites=true&w=majority'
const DB='mongodb+srv://sufiyan:9096528756sss@cluster0.da4omqm.mongodb.net/?retryWrites=true&w=majority';

const connectDb=()=>{
    mongoose.connect(DB,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{console.log("connection successfull data base")}
).catch((err)=>{
    console.log(err)
});

}



export default connectDb;



// ,{
//     userNewUrlParser:true,
//     userCreateIndex:true,
//     useUnifieldTopology:true,
//     useFindAndModify:false
// }