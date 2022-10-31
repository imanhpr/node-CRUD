const token = require("../utils/csrf");

module.exports = (request, response, next) => {
    const {
        csrf_token
    } = request.body;
    if (token.verify("Key", csrf_token)) return next();
    response.status(400).send("400 Token Unvalid")
}