const express = require("express");
const router = express.Router();
const myWeb = require("./myWeb");

router.use("/", myWeb);


module.exports = router;