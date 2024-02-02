
const mongoose=require('mongoose');
const foodSchema=require('./model/foodModel');
const foodJson=require('./foodJson');
const url="mongodb://localhost:27017/resapi";
const connectDB=async()=>{
  try {
    const conn=await mongoose.connect(url);
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
