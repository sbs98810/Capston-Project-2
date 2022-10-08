const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/FoodKart').then((res)=>console.log('connected to DB')).catch((err)=>console.log('DB not connected'));

const fooddetailsmodel = mongoose.model('fooditemdetails',{
    
})

module.exports = fooddetailsmodel;