const { Router } = require("express");
const controller = require("../controllers/profile")
const {isAuth} = require("../middleware/is-auth");


const router = Router();

router.get('' , isAuth, controller.getProfile);
router.post('' ,isAuth, controller.postProfile);

module.exports = router;