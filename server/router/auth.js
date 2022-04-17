const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`Hello world from the server rotuer js`);
});

router.post('/register', (req, res) => {
    console.log(req.body);
    res.json({ message: req.body });
    // res.send("mera register page");
});

router.get('/about', (req, res) => {
    res.send(`Hello About world from the server`);
});

router.get('/contact', (req, res) => {
    res.send(`Hello Contact world from the server`);
});

router.get('/signin', (req, res) => {
    res.send(`Hello Login world from the server`);
});

router.get('/signup', (req, res) => {
    res.send(`Hello Registration world from the server`);
});
module.exports = router;