// Adding express
const express = require("express");
// Adding path
const path = require("path");

const app = express();
const PORT = process.env || 8080;

app.get('/', function (req, res) {
    res.send('Whats popping?')
  })
   
  app.listen(3000)

