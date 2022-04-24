const mongooose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongooose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  work: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
});

// Middelware
// const middleware = (req,res, next) => {
//     console.log(`Hello my Middleware`);
//     next();
// }
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = bcrypt.hash(this.password, 12);
    this.cpassword = bcrypt.hash(this.cpassword, 12);
  }
  next();
});

const User = mongooose.model("USER", userSchema);

module.exports = User;
