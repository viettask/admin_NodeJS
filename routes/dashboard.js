const express = require('express');
const router = express.Router();

router.get('/index', (req,res) => {
    let main = "dashboard/main";
    res.render('index', {main});
});

module.exports = router;