const mongoose = require("mongoose");

const mongoURI = process.env.MONGO_URL || 
  "mongodb+srv://Yash:SbegDv!SEhY6fPs@atlascluster.gxpo6ly.mongodb.net/ChicagoFood?retryWrites=true&w=majority&appName=AtlasCluster";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);

    console.log("Database Connected"); 
  } catch (err) {
    console.log(err);
  }
};

module.exports = mongoDB;
