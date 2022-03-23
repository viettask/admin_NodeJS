const express = require('express');
const router = express.Router();

router.get('/index', (req,res) => {
    let main = "products/main";
    res.render('index', {main});
});

module.exports = router;