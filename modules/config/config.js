const path = require("path");
module.exports = {
  port: 2352,
  connectionString:  "mongodb://127.0.0.1:27017/amirdb", 
  path: {
    controller: path.resolve("./modules/controllers"),
    model: path.resolve("./modules/models"),
  },
};


