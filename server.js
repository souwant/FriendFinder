const express = require("express");
const path = require("path");
const bodyParser = require('body-parser')

//sets up the sever
const appExpress = express();
var PORT = process.env.PORT || 8080;

const jsonPasser = bodyParser.json()

const urlencodedParser = bodyParser.urlencoded({extended: true})

appExpress.use(bodyParser.json({ type: 'application/*+json'}))

appExpress.use(bodyParser.raw({type: 'application/vnd.custom-type'}))

appExpress.use(bodyParser.text({type: 'text/html'}))

///sets express app to handle data parsing
///appExpress.use(express.urlencoded({ extended: true }));
//appExpress.use(express.json());



require("./app/routes/apiRoutes")(appExpress);
require("./app/routes/htmlRoutes")(appExpress);

//starts the sever
appExpress.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });