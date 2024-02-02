const express=require('express');
const foodController=require('../controller/foodController');
const router=express.Router();

router.route('/').get(foodController);

module.exports=router;