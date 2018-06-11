var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from "public"
app.use(express.static("public"));

// Parse application/x-222-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars
var expbhs = require("express-handlebars");

app.engine("handlebars", expbhs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and vie the server access to them
var routes = require("./controllers/burgerController.js");

app.use(routes);

app.listen(PORT, function() {
	console.log("App listening at localhost:" + PORT);
});
