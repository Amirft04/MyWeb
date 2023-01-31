const express = require("express");
const app = express();
const config = require("./modules/config/config");
const bodyParser = require("body-parser");
const path = require("path");
var expressLayouts = require("express-ejs-layouts");
const connectDB = require("./modules/config/DB");
connectDB();

app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("views", path.join(__dirname, "/modules/views"));
app.set(
  "layout",
  "layouts/mainLayout.ejs","layouts/dashboardLayout.ejs"
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: "application/json" }));

app.use("/public", express.static(__dirname + "/public"));

const webRouter = require("./modules/routes/web");

app.use("/", webRouter);

app.listen(config.port, () => {
  console.log("listening on *: " + config.port);
});
