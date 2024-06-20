const express = require("express");
const bodyParser = require("body-parser");

const serverless = require("serverless-http");

const routes = require("./routes");

const app = express();

app.use(bodyParser.json());

app.use("/", routes);

// app.listen(3000, () => console.log("app is running on port 3000"));
module.exports.handler = serverless(app);
