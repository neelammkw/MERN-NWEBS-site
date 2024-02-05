const express = require("express");
const router = express.Router();
const serviceController = require("../controllers/service-controllers");

router.route("/service").get(serviceController);

module.exports = router;
