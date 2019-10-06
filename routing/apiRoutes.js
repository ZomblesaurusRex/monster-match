// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var matchData = require("../app/data/matchData");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    app.get("/api/matches", function (req, res) {
        res.json(matchData);
    });
    
    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------

    app.post("/api/matches", function (req, res) {
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table
        // req.body is available since we're using the body parsing middleware
        var matchScore = req.body.scores;
        var scoresArr = [];
        var bestMatch = 0;
         
        for (i = 0; i < matchScore.length; i++) {
            var scoreDiff = 0;
            for (i = 0; i < matchScore.length; j++) {
                scoreDiff += (Math.abs(parseInt(matchData[i].scores[j] - parseInt(score[j]))))
            }
            scoresArr.push(scoreDiff);
        }
        for (i = 0; i < scoresArr.length; i++) {
        if (scoresArr[i] <= scoresArr[bestMatch]){
            bestMatch = i;
        }
        }
        // return best match
        var monsterMatch = scoresArr[bestMatch];
        res.json(monsterMatch);
        console.log(req.body);
        matchData.push(req.body);
    });

    // ---------------------------------------------------------------------------
    // I added this below code so you could clear out the table while working with the functionality.
    // Don"t worry about it!

    app.post("/api/clear", function (req, res) {
        // Empty out the arrays of data
        matchData.length = 0;

        res.json({ ok: true });
    });
};