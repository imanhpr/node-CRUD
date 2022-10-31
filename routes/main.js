const Express = require("express");

const router = Express.Router();

const index = require("../controllers/main");

router.get("/" , index);

module.exports = router;