var express = require("express");
var app = express();
var PORT = 3000;
var bodyParser = require("body-parser");
var path = require("path");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

require('./app/routing/api.js')(app);
require('./app/routing/html.js')(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});