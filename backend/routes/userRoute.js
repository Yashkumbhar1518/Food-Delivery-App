const express = require("express");
const router = express.Router();
const user = require("../models/userModel");
const { body, validationResult } = require("express-validator");

router.post(
  "/createuser",
  [
    body("email").isEmail(),
    body(
      "password",
      "Inavlid Length min 7 characters should be there"
    ).isLength({ min: 7 }),
    body('name' , "Min 5 characters").isLength({min : 5})
  ],
  async (req, res) => {
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error : error.array()})
    }
    try {
        
      await user.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);
module.exports = router;
