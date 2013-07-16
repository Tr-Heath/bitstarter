var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());


var buffer = new Buffer(128);
//buffer = fs.readFileSync("index.html");
//buffer = "This is a test";


app.get('/', function(request, response) {
  response.send(fs.readFileSync("./index.html").toString());
  //response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
