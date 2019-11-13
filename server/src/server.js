const express = require("express");
const router = require("./router.js");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use(router);

module.exports = app;
