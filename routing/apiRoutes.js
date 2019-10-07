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

        for (var i = 0; i < matchArray.length; i++) {
            console.log(matchArray[i].name);
            totalDifference = 0;
            console.log("Total Diff " + totalDifference);
            console.log("Best match diff " + bestMatch.monsterDifference);

            var betaMonsterScore = matchArray[i].scores.reduce((a, b) => a + b, 0);
            console.log("Total score " + betaMonsterScore);
            totalDifference += Math.abs(sum - betaMonsterScore);
            console.log("-------------------------> " + totalDifference);

            // =============================================
            if (totalDifference <= bestMatch.monsterDifference) {
                bestMatch.name = matchArray[i].name;
                bestMatch.photo = matchArray[i].photo;
                bestMatch.monsterDifference = totalDifference;
            }
            console.log(totalDifference + " Total Difference");
        }
        console.log(bestMatch);

        console.log("New user added");
        res.json(monsterMatch);
        console.log(userData);
        matchData.push(req.body);
    });

    // ---------------------------------------------------------------------------
    // I added this below code so you could clear out the table while working with the functionality.
    // Don"t worry about it!

    app.post("/api/clear", function (req, res) {
        // Empty out the arrays of data
        matchArray.length = 0;

        res.json({ ok: true });
    });
};