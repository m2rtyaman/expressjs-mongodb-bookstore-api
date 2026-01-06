const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config()
const connectToDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER_NAME}.mongodb.net/`)
    console.log("MongoDB is connected succesfully")
} catch (err) {
    console.error("Mongodb connection error",err);
    process.exit(1)
  }
};
module.exports = connectToDB;