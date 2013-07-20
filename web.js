#!/usr/bin/env node

var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());


var str = fs.readFile('index.html');

//var buf = new Buffer(str, 'utf-8');

var buf = new Buffer(str);
//for (var i = 0; i < str.length ; i++) {
//  buf[i] = str.charCodeAt(i);
//}

console.log(buf.toString('utf-8'));

app.get('/', function(request, response) {
  response.send(buf.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
