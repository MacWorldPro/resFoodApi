
const mongoose=require('mongoose');
const url="mongodb://localhost:27017/resapi";
const connectDB=async()=>{
  try {
    const conn=await mongoose.connect(url);
    console.log('connected');
    console.log(`${conn.connection.host}`)
  } catch (e) {
    console.log(e);
  } 
};

module.exports=connectDB;
