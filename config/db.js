
const mongoose=require('mongoose');
const env=require('dotenv').config();
const MONGO_URI=process.env.MONGO_URI;
const connectDB=async()=>{
  try {
    const conn=await mongoose.connect(MONGO_URI);
    console.log('connected');
    // console.log(`${conn.connection.host}`)
  } catch (e) {
    console.log(e);
  } 
};

module.exports=connectDB;
