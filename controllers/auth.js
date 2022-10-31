const bcrypt = require("bcryptjs");

const User = require("../models/user");
const token = require("../utils/csrf");

module.exports.getRegister = (request, response) => {
    response.render("register", {
        csrf_token: token.create("Key")
    })
};

module.exports.postRegister = (request, response) => {
    const {
        email,
        password
    } = request.body;
    bcrypt.hash(password, 12)
        .then(hashedPassword => {
            return User.create({
                email: email,
                password: hashedPassword
            })
        })
        .then(new_user => {
            request.flash('messages', {message: `اکانت شما با ایمیل ${new_user.email} با موفقیت ساخته شد.` , color : 'green'})
        })
        .catch(err => {
            if (err.name ==='SequelizeUniqueConstraintError'){
                request.flash("messages" , {message : 'اکانتی با این ایمیل وجود دارد.', color : 'red'})
            } else {
                request.flash("messages" , {message : 'خطای ناشناخته' , color : 'red'})
            }
        })
        .finally(() => {
            response.redirect('/')
        })
};

module.exports.getLogin = (request, response) => {
    response.render("login", {
        csrf_token: token.create('Key'),
        errors : request.flash("messages"),
    });
};

module.exports.postLogin = (request, response) => {
    const {
        email,
        password,
    } = request.body;
    User.findOne({
            where: {
                email: email
            }
        })
        .then(user => {
            if (!user) {
                request.flash('messages' , {message: 'ایمیل یا پسورد مشکل دارد.' , color : 'red'})
                return response.redirect('/account/login');
            }
            bcrypt.compare(password, user.password)
                .then(result => {
                    if (!result) {
                        request.flash('messages' , {message: 'ایمیل یا پسورد مشکل دارد.' , color : 'red'})
                        return response.redirect('/account/login');
                    }
                    request.session.isAuthenticated = true;
                    request.session.user = user;
                    request.flash('messages' , {message: 'با موفقیت وارد حساب کاربری خود شدید.' , color : 'green'})
                    return response.redirect("/")
                })
        })
        .catch(err => console.log('errrrr'))
};

module.exports.logout = (request, response) => {
    request.session.destroy();
    response.redirect('/')
};