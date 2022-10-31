const Content = require('../models/content');
const User = require('../models/user');

const index = (request, response) => {
    Content.findAll({
        include : User
    })
    .then(contents => {
        response.render("index", {
            errors: request.flash('messages'),
            contents: contents,
        });
    })
}

module.exports = index;