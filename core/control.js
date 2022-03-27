const express = require('express');
const router = express.Router();

//Gọi đến routes dashboard
router.use('/admin/bang-dieu-khien', require('../routes/dashboard'));

//Gọi đến routes categories
router.use('/admin/danh-muc', require('../routes/categories'));

//Gọi đến routes products
router.use('/admin/san-pham', require('../routes/products'));

//Gọi đến routes users
router.use('/admin/thanh-vien', require('../routes/users'));

//Login
router.get('/login', (req, res) => {
    res.render('partials/login');
})

//Lý thuyết cookie
//1. Tạo
//2. Sử dụng
//3. Xóa


// 1. tạo
router.get('/createCookie', (req, res) => {
    res.cookie('key', 'value', {maxAge: 20000}).send('Đã tạo Cookie');
})
// 2. sử dụng
router.get('/useCookie', (req, res) => {
    res.send(req.cookies.key);
})
// 3. xóa
router.get('/deleteCookie', (req, res) => {
    res.clearCookie('key').send('Đã xóa Cookie');
})

module.exports = router;