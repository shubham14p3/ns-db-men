// Create Token and saving in cookie
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser");
// const sendToken = require("../utils/jwtToken");

require("../db/conn");
const User = require("../model/userSchema");
router.use(cookieParser());
const sendToken = async (userLogin, statusCode, res) => {
  const token = await userLogin.generateAuthToken();
  console.log("hitting jwtplace",token);
  // options for cookie
  const options = {
    expires: new Date(Date.now() + 2589200000),
    httpOnly: false,
  };

  res.status(statusCode).cookie("jwttoken", token, options)
  .json({
    success: true,
    // userLogin,
    // token,
    message: "User Signed Successfully."
  });
  console.log("hitting after jwtplace");
};

module.exports = sendToken;
