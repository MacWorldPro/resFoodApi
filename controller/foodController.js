const foodModel=require('../model/foodModel');

const allFood=async(req,res)=>{
    const {foodName,restaurantName,price,rating,sort,select}=req.query;
    const queryObj={};
    if(foodName){
        queryObj.foodName={$regex:foodName,$options:"i"};
    }
    if(restaurantName){
        queryObj.restaurantName={$regex:restaurantName,$options:"i"};
    }
    if(price){
        queryObj.price={$regex:price,$options:"i"};
    }

    if(rating){
        queryObj.rating={$regex:rating,$options:"i"};
    }

    let apiData=foodModel.find(queryObj);

    if(sort){
        let sortFix=sort.split(",").join(" ");
        apiData=apiData.sort(sortFix);
    }

    if(select){
        let selectFix=select.split(",").join(" ");
        apiData=apiData.select(selectFix);
    }

    let page=req.query.page||1;
    let limit=req.query.limit||3;

    let skip=(page-1)*limit;

    apiData=apiData.skip(skip).limit(limit);

    const allFoodData=await apiData;
    res.status(200).json({allFoodData,nbHits:allFoodData.length});
};

module.exports=allFood;