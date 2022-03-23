const express = require('express');
const router = express.Router();

router.get('/index', (req,res) => {
    let main = "users/main";
    res.render('index', {main});
});

module.exports = router;