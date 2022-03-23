const express = require('express');
const router = express.Router();

//Gọi đến routes dashboard
router.use('/admin/bang-dieu-khien',require('../routes/dashboard'));

//Gọi đến routes categories
router.use('/admin/danh-muc',require('../routes/categories'));

//Gọi đến routes products
router.use('/admin/san-pham',require('../routes/products'));

//Gọi đến routes users
router.use('/admin/thanh-vien',require('../routes/users'));

module.exports = router;