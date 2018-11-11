var path = require("path");

module.exports = function (app) {
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });

    // redirects all routes home if it doesn't exist
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });

    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });
};