const express = require("express");
const { flash } = require("express-flash-message");
const router = express.Router();
const path = require("path");
const ContactUsController = require("../../controller/web/ContactUsController");

router.get("/", async (req, res) => {
  res.render(path.join(__dirname, "../../views/pages/index.ejs"));
});

router.post("/newcontact", async (req, res) => {
  let result = await ContactUsController.storeNewContact(req);
  if (result.success) {
    req.flash("message", result.message);
    alert("success")
  }
});

module.exports = router;
