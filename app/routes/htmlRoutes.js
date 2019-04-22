
const path = require("path");


module.exports = function(appExpress) {
  
  appExpress.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  appExpress.use(function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
 });

  
  //appExpress.use("*", function(req, res) {
    //res.sendFile(path.join(__dirname, "../public/home.html"));
  //});
};
