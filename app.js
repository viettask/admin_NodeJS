const express = require('express');
const app = express();
const port = 3000;

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

app.listen(process.env.PORT || port, () => {
    console.log('Example app listening on port '+port);
});