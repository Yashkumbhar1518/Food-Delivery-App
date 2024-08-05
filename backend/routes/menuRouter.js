const express = require("express");
const router = express.Router();
const menu = require("../models/menuModel");

router.get('/getmenu' , async(req , res) => {
    try {
        const data =await  menu.find();
        res.status(200).json({data , success : true})
        
    } catch (error) {
        
    }
})
module.exports = router;