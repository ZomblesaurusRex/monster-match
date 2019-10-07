// DEPENDENCIES
var path = require("path");
// ===============================================================================

// ROUTING
module.exports = function (app) {


    // HTML GET Requests
    app.get("/match-me", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    // If no matching route is found default to home
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    
};
    // ===============================================================================