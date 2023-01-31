const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const pageShema = new mongoose.Schema({
  titleWelcom: { type: String, require: true },
  subTitleWelcome: { type: String, require: true },
  descriptionWelcome: { type: String, require: true },
  titleAboutUs: { type: String, require: true },
  subTitleAboutUse: { type: String, require: true },
  descriptionAboutUse: { type: String, require: true },
  imagesAboutUse: [{ type: String, default: "" }],
  titleFeatured: { type: String, require: true },
  subTitleFeatured: { type: String, require: true },
  descriptionFeatured: { type: String, require: true },
  imagesFeatured: [{ type: String, default: "" }],
  titleProject: { type: String, require: true },
  subTitleProject: { type: String, require: true },
});
pageShema.plugin(timestamps);
const Page = mongoose.model("Page", pageShema);
module.exports = Page;
