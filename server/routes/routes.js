const express = require("express");
const bodyParser = require("body-parser");
const { getCrimes } = require("../controllers/getCrimes.js");
const { getCategories } = require("../controllers/getCategories.js");
const routes = express.Router();

routes.use(bodyParser.json());

routes.get("/", getCrimes);
routes.get("/categories", getCategories);

module.exports = routes;
