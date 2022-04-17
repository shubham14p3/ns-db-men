const mongoose = require("mongoose");
const DB = process.env.DATABASE;
const mongodb = async () => {
  await mongoose.connect(DB);
  console.log(`connnection successful`);
};
module.exports = mongodb;
