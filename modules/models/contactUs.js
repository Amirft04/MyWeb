const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const contactUsShema = new mongoose.Schema({
  isDeleted: { type: Boolean, default: false },
  email: { type: String, require: true },
  name: { type: String, require: true },
  message: { type: String, require: true },
});
contactUsShema.plugin(timestamps);
const ContactUs = mongoose.model("ContactUs", contactUsShema);
module.exports = ContactUs;
