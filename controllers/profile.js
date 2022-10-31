const Content = require("../models/content");

module.exports.getProfile = (request, response) => {
    response.render("profile")
}

module.exports.postProfile = (request, response) => {
    const { subject , content } = request.body;
    Content.create({
        subject : subject, 
        content: content,
        UserId : request.session.user.id
    })
    request.flash("messages" , {message : 'مطلب با موفقیت ثبت شد.' , color : 'green'})
    response.redirect('/')
}