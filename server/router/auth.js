const express = require("express");
const User = require("../model/userSchema");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(`Hello world from the server rotuer js`);
});

router.post("/register", async (req, res) => {
  // console.log(req.body);
  // res.json({ message: req.body });
  // res.send("mera register page");
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Please fill the field properly" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email already exist" });
    }
    const user = new User({ name, email, phone, work, password, cpassword });
    await user.save();
    res.status(201).json({ message: "User registered Successfully" });
  } catch (err) {
    console.log(err);
  }
});
router.get("/signin",async (req, res) => {
    try{
        const {  email, password } = req.body;
    if (!email  || !password ) {
      return res.status(400).json({ error: "Please fill the field Data" });
    }
    const userLogin =await User.findOne({email:email});

    }catch (err) {
        console.log(err);
      }
    res.send(`Hello Login world from the server`);
  });

router.get("/about", (req, res) => {
  res.send(`Hello About world from the server`);
});

router.get("/contact", (req, res) => {
  res.send(`Hello Contact world from the server`);
});



module.exports = router;
