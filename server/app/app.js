const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("../routes/routes.js");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(cors());
app.use("/", routes);

module.exports = app;
