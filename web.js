#!/usr/bin/env node

var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  fs.readFile('index.html',function (err, data){
      response.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
      response.write(data);
      response.end();
    });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
