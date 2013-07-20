#!/usr/bin/env node

var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());


var str = fs.readFileSync('index.html');
var buf = new Buffer(str.length);
for (var i = 0; i < str.length ; i++) {
  buf[i] = str.charCodeAt(i);
}

app.get('/', function(request, response) {
  response.send(buf);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
