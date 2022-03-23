const express = require('express');
const router = express.Router();

router.get('/index', (req,res) => {
    let main = "categories/main";
    res.render('index', {main});
});

router.get('/add', (req,res) => {
    let main = "categories/add";
    res.render('index', {main});
});

module.exports = router;