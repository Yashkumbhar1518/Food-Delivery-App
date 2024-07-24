const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://Yash:SbegDv!SEhY6fPs@atlascluster.gxpo6ly.mongodb.net/ChicagoFood";
const mongoDB = async() => {
  try{
   await mongoose.connect(mongoURI);
        console.log("Database Conneceted");
        
  }
  catch(err){
    console.log(err)
  }
};
module.exports = mongoDB;
