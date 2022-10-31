const Express = require("express");
const Morgan = require("morgan");
const Session = require("express-session");
const Flash = require("connect-flash");

const sequelize = require("./utils/database");
const tables = require("./models/index")

const main_router = require("./routes/main");
const auth_router = require("./routes/auth");
const profile_router = require("./routes/profile");

const app = Express()

app.set("view engine", 'ejs');

app.use("/static", Express.static("public"))
app.use(Session({
    secret: 'mykey',
    resave: false,
    saveUninitialized: false,
    name:'sid',
}));
app.use(Morgan("tiny"));
app.use(Flash())
app.use(Express.urlencoded({
    extended: false
}));

// global view objects.
app.use((request, response, next) => {
    const isAuth = request.session.user ? true : false
    request.isAuth = isAuth
    response.locals = {
        path: request.path,
        session : request.session,
        isAuth : isAuth,
    }
    next()
})

app.use(main_router);

app.use('/account', auth_router);

app.use('/profile' , profile_router);


sequelize.sync()
    .then(result => {
        app.listen(8000);
    })