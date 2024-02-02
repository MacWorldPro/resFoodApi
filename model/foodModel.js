const mongoose=require('mongoose');

const foodSchema=mongoose.Schema(
    {
        foodName:{type:"String",required:true},
        price:{type:"Number",required:true},
        rating:{type:"String",default:"2.0"},
        createdAt:{type:"Date",default:Date.now()},
        restaurantName:{type:"String",required:true}

    }
)


const food = mongoose.model("Food", foodSchema);

module.exports = food;