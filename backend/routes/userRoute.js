const express = require("express");
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const user = require("../models/userModel");
const { body, validationResult } = require("express-validator");
const jwtSecret = "Yashganeshkumbhar@uhfuhuewhfuwhef"
router.post(
  "/createuser",
  [
    body("name", "Name should have atleast 2 characters").isLength({ min: 2 }),
    body("email" , "Enter Valid Email").isEmail(),
    body(
      "password",
      "Password should have minimum 7 characters"
    ).isLength({ min: 7 }),
  ],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      // console.log(error)
      return res.status(400).json({message : error.errors[0].msg , success : false });
    }

    const salt = await bycrypt.genSalt(10);
    const securePass = await bycrypt.hash(req.body.password , salt)

    try {
      const userFound = await user.findOne({email : req.body.email})
      if(userFound){
        return res.status(400).json({ "message" : "Email already exist" , success : false});
      }else{
      await user
        .create({
          name: req.body.name,
          email: req.body.email,
          password: securePass,
        })
        .then(res.json({message : "User Registered Succesfully" ,  success: true }));
      }
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

router.post(
  "/loginuser",
  [
    body("email", "Enter a valid email").isEmail(),
    body(
      "password",
    ).isLength({  
      min: 7,
    }),
  ],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({message : error.errors[0].msg , success:false });
    }
    let email = req.body.email;
    try {
      let userData = await user.findOne({ email });
      if (!userData) {
        return res.status(400).json({ message: "Email doesn't exist " , success : false});
      }

      const passCompare = await bycrypt.compare(req.body.password , userData.password)

      if (!passCompare) {
        return res.status(400).json({ message: "Enter Correct Password" , success : false});
      }

      const data = {
        user : {
          id : userData.id
        }
      }

      const authToken = jwt.sign(data , jwtSecret )

      // const userDetails = {id:userData._id,name:userData.name, email:userData.email}
      res.json({ message : "Login Successfull" , success: true , authToken});
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);
module.exports = router;
