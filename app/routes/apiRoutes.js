var friendsData = require("../data/friendsData");

module.exports = function(appExpress) {
  appExpress.get("/api/friendsData", function(req, res) {
    res.json(friendsData);
  });

  appExpress.post("/api/friendsData", function(req, res) {
      
    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 100
    };

    console.log(req.body);

    var userData = req.body;
    var userScores = userData.scores;

    console.log(userScores);

    var totalDifference = 0;

    for (var i = 0; i < friends.length; i++) {
      console.log(frineds[i]);
      totalDifference = 0;

      for (var j = 0; j < friends[i].scores[j]; j++) {
        totalDifference += Math.abs(
          parseInt(userScores[j]) - parseInt(friends[i].scores[j])
        );

        if (totalDifference <= bestMatch.friendDifference) {
          bestMatch.name = friends[i].name;
          bestMatch.photo = friends[i].photo;
          bestMatch.friendDifference = totalDifference;
        }
      }
    }

    friends.push(userData);
    res.json(bestMatch);

  });

  appExpress.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    friendsData.length = 0;
    res.json({ ok: true });
  });
};
