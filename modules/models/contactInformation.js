const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const contactInformationShema = new mongoose.Schema({
  facebook: { type: String },
  twitter: { type: String },
  instagram: { type: String },
  phone: { type: Number, require: true },
  email: { type: String, require: true },
  description: { type: String },
});
contactInformationShema.plugin(timestamps);
const ContactInformation = mongoose.model(
  "ContactInformation",
  contactInformationShema
);
module.exports = ContactInformation;
