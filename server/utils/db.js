const mongoose = require("mongoose");
require("dotenv").config();
// const URI = "mongodb://127.0.0.1:27017/mern_admin"
//mongoose.connect(URI);
const uri = process.env.MONGODB_URI;

// mongodb.connect(uri);

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error; // Rethrow the error to handle it in the server startup code
  }
};

module.exports = connectDb;