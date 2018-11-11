// Required dependencies
require('dotenv').config();
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Instantiate express 
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API and HTML routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Listens to server
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});