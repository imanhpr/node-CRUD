const User = require("./user");
const Content = require("./content");

User.hasMany(Content);
Content.belongsTo(User);

module.exports = [
    Content,
    User,
]