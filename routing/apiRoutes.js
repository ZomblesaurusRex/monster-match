var matchData = require("../app/data/matchData");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests
    app.get("/api/monsters", function (req, res) {
        res.json(matchData);
    });
    // =====================================================
    // API POST Requests
    app.post("/api/monsters", function (req, res) {
        var totalDiff = 0;
        var bestMatch = {
            name: "",
            imgURL: "",
            scoreDiff: 1000
        };

        var userData = req.body;
        var userName = userData.name
        var userScores = userData.scores;
         
        // for loop over old Data do something with each item before putting it in the Data;
        var b = userScores.map(function (item) {
            return parseInt(item, 10);
        });
        userData = {
            name: req.body.name,
            photo: req.body.photo,
            scores: b
        };

        console.log("Name: " + userName);
        console.log("User Score " + userScores);

        var sum = b.reduce((a, b) => a + b, 0);

        console.log("Sum of Monster score " + sum);
        console.log("Best match diff " + bestMatch.monsterDifference);
        console.log("+++++++=================++++++++++");

        for (var i = 0; i < matchData.length; i++) {
            console.log(matchData[i].name);
            totalDifference = 0;
            console.log("Total Diff " + totalDifference);
            console.log("Best match diff " + bestMatch.monsterDifference);

            var betaMonsterScore = matchData[i].scores.reduce((a, b) => a + b, 0);
            console.log("Total score " + betaMonsterScore);
            totalDifference += Math.abs(sum - betaMonsterScore);
            console.log("-------------------------> " + totalDifference);

            // =============================================
            if (totalDifference <= bestMatch.monsterDifference) {
                bestMatch.name = matchData[i].name;
                bestMatch.photo = matchData[i].photo;
                bestMatch.monsterDifference = totalDifference;
            }
            console.log(totalDifference + " Total Difference");
        }
        console.log(bestMatch);

        console.log("New user added");
        res.json(bestMatch);
        console.log(userData);
        matchData.push(req.body);
    });

    // ---------------------------------------------------------------------------
    // I added this below code so you could clear out the table while working with the functionality.
    // Don"t worry about it!

    app.post("/api/clear", function (req, res) {
        // Empty out the Datas of data
        matchData.length = 0;

        res.json({ ok: true });
    });
};