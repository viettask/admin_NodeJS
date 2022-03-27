const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
//parser application
app.use(bodyParser.urlencoded({extended:false}));
//parser application/json
app.use(bodyParser.json());

//Goi ejs
app.set('view engine', 'ejs');
app.set('views', './views');

//Cai dat duong dan tinh
app.use(express.static('public'));

// app.get('/', (req,res) => {
//     res.render('index');
// 

//Gọi đến file control
app.use('/',require('./core/control'));

// app.listen(process.env.PORT || port, () => {
//     console.log('Example app listening on port '+port);
// });

app.listen(port, () => {
    console.log('Example app listening on port '+port);
});

//Lý thuyết cookie
//1. Tạo
//2. Sử dụng
//3. Xóa

const cookieParser = require('cookie-parser');
app.use(cookieParser);

