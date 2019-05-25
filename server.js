// middleware handler?
const bodyParser = require("body-parser");
// Adding express
const express = require("express");

const app = express();

// Adding path
const path = require("path");

// creating a port
const PORT = process.env || 3000;

app.get('/', function (req, res) {
    res.send('Whats popping?')
  });
   

  // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))
 
// // parse application/json
// app.use(bodyParser.json())
 
// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// });

// app.listen(PORT, function(){
//     console.log("App listening on port: "+ PORT);
// });

