const { Router } = require("express");
const authController  = require("../controllers/auth");

const csrfProtection = require("../middleware/csrf");
const permission = require("../middleware/is-auth");

const router = Router();

router.get("/register" ,permission.isAnonymous, authController.getRegister);
router.post("/register" ,permission.isAnonymous, csrfProtection, authController.postRegister);

router.get("/login" , permission.isAnonymous,authController.getLogin);
router.post("/login" , permission.isAnonymous , csrfProtection, authController.postLogin);

router.get("/logout" , permission.isAuth, authController.logout);

module.exports = router;