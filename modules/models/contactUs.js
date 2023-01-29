const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const contactUsShema = new mongoose.Schema({
  isDeleted: { type: Boolean, default: false },
  email: { type: String, default: "" },
  name: { type: String, default: "" },
  message: { type: String, default: "" },
});
contactUsShema.plugin(timestamps);
const ContactUs = mongoose.model("ContactUs", contactUsShema);
module.exports = ContactUs;
