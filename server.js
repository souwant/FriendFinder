const express = require("express");
const path = require("path");
const bodyParser = require('body-parser')

//sets up the sever
const appExpress = express();
var PORT = process.env.PORT || 8080;



///sets express app to handle data parsing
appExpress.use(express.urlencoded({ extended: true }));
appExpress.use(express.json());



require("./routes/apiRoutes")(appExpress);
require("./routes/htmlRoutes")(appExpress);

//starts the sever
appExpress.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });