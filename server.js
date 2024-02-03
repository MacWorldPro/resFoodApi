const express=require('express');
const env=require('dotenv').config();
const connectDB = require("./config/db");
const foodRoutes=require('./routes/foodRoutes');

const PORT=process.env.PORT;

const app=express();
connectDB();

app.get('/',(req,res)=>{
    res.send('Happy');
});

app.use('/api/food',foodRoutes);

// If there is some error than to log that error we are using try catch block u can write without it also, it will definitely run

const run=async()=>{
    try {
        app.listen(PORT,(req,res)=>{
            console.log(`Server is running successfully on PORT ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
};

run();
