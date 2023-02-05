require("dotenv").config();

const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true
  });

  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDB;
