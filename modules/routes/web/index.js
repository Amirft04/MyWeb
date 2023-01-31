const express = require("express");
const router = express.Router();
const myWeb = require("./myWeb");
const dashboard = require("./dashboard");

router.use("/", myWeb);
router.use("/dashboard", dashboard);

module.exports = router;