const express = require("express");
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require("./routes");
const routeSignin = require("./route-signin");
const routeAccount = require("./route-account");

app.use("/", routes);
app.use("/auth", routeSignin);
app.use("/account", routeAccount);

app.listen(3003, () => {
  console.log("Start server at port 3003.");
});
