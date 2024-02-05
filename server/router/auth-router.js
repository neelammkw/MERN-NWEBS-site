const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controllers");
const {signupSchema, loginSchema} = require("../validators/auth-validator");
const validate = require("../middleware/validate-middleware");
const authMiddleware = require("../middleware/auth-middleware");
const serviceController = require("../controllers/service-controllers");

router.route("/").get(authcontrollers.home);
router.route('/register').post(validate(signupSchema), authcontrollers.register);
router.route('/service').get(serviceController); // Error is likely here
router.route('/login').post(validate(loginSchema),authcontrollers.login);
router.route("/user").get(authMiddleware, authcontrollers.user);

module.exports = router;
