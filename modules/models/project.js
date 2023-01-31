const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const projectShema = new mongoose.Schema({
  image: { type: String },
  title: { type: String, require: true },
  description: { type: String, require: true },
  isdeleted: { type: Boolean, default: false },
});
projectShema.plugin(timestamps);
const Project = mongoose.model("Project", projectShema);
module.exports = Project;
