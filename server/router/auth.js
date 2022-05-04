const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
var cookieParser = require("cookie-parser");

require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send(`Hello world from the server rotuer js`);
});

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  // if (!name || !email || !phone || !work || !password || !cpassword) {
  if (!name || !email || !password || !cpassword) {
    return res.status(422).json({ error: "Wrong Data Kindly fill it." });
  }
  try {
    
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email already exist" });
    } else if (password !== cpassword) {
      return res.status(422).json({ error: "Password is not matching" });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });
      
      await user.save();
      res.status(201).json({ message: "User Register Successfully." });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/about", (req, res) => {
  res.send(`Hello About world from the server`);
});

router.get("/about", (req, res) => {
  res.send(`Hello About world from the server`);
});

router.get("/contact", (req, res) => {
  res.cookie("nise-comport-contact", 'token');
  res.send(`Hello Contact world from the server`);
});

router.post("/signin", async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Please fill the data" });
    }

    const userLogin = await User.findOne({ email: email });
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
     token = await userLogin.generateAuthToken();
      res.cookie("nisecomport", token,
      {
        expires: new Date(Date.now() + 2589200000),
        httpOnly: true,
      });
      if (!isMatch) {
        res.status(400).json({ error: "Invalid Credentials!" });
      } else {
        res.json({ message: "User Signed Successfully." });
      }
    } else {
      res.status(400).json({ error: "Invalid Credentials!" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
