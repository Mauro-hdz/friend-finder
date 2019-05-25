// middleware handler?
const bodyParser = require("body-parser");
// Adding express
const express = require("express");
// Adding path
const path = require("path");

const app = express();



// creating a port
const PORT = process.env.PORT || 8080;

   

 // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 

require("./app/routing/apiRoutes") (app);

require("./app/routing/htmlRoutes") (app);


app.listen(PORT, function() {
  console.log("connected port: " +PORT);
});


