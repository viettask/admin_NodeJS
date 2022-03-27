const express = require('express');
const { append } = require('express/lib/response');
const router = express.Router();
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

router.get('/index', (req, res) => {
    let main = "users/main";
    res.render('index', { main });
});

router.get('/register', (req, res) => {
    var hash = bcrypt.hashSync("123456", salt);
    res.send({hash});
});


//Xử lý Login 
router.post('/loginProcess', function (req, res) {
    //res.send('POST request to the homepage')

    //1. Khai báo biến
    var username = password = error = '', flag = 1;

    //2. Lấy dữ liệu
    username = req.body.username;
    password = req.body.password;

    //3. Kiểm tra dữ liệu

    //4. Tổng hợp
    if (flag == 1) {
        //res.json({username,password});
        //Tương tác với database


        if (username == 'admin') {
            var hash = '$2a$10$D0EeGNv4FyDmT0Ife6HgcuoCUhhYPjoGQa6KHNCtuSviok1GCY86O';
            var check_pass = bcrypt.compareSync(password, hash);

            if(check_pass == true)
            {
                res.json({ kq: 1, msg: 'Đăng nhập thành công' });
            }
            else{
                res.json({ kq: 0, msg: 'Tên đăng nhập hoặc mật khẩu không chính xác' });
            }

        } else {
            res.json({ kq: 0, msg: 'Dữ liệu không tồn tại' });
        }
    }
    else {
        res.json({ kg: 0, msg: error });
    }

})

module.exports = router;