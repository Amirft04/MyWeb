const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", async (req, res) => {
  res.render(path.join(__dirname, "../../views/pages/dashboard/Dashboard.ejs"),{ layout: path.join(__dirname, "../../views/layouts/dashboardLayout.ejs") });
});

module.exports = router;
