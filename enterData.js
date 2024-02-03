
const mongoose=require('mongoose');
const foodSchema=require('./model/foodModel');
const foodJson=require('./foodJson');
const env=require('dotenv').config();
const MONGO_URI=process.env.MONGO_URI;
const connectDB=async()=>{
  try {
    const conn=await mongoose.connect(MONGO_URI);
    await foodSchema.deleteMany();
    await foodSchema.create(foodJson);
    console.log('connected');
    console.log(`${conn.connection.host}`)
  } catch (e) {
    console.log(e);
  } 
};

connectDB();
module.exports=connectDB;
