const express = require('express');
const Router = express.Router();
const fooddetailsmodel = require('./fooddetailsmodel');

Router.get('/getfooditems',async(req,res)=>{
    try{
        const result=await fooddetailsmodel.find({})
        res.send(result)
    }
    catch(e){
        res.send('error')
    }
})

module.exports = Router