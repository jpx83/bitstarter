#!/usr/bin/env node

/*
var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());


var str = fs.readFileSync('index.html', 'utf-8');

//var buf = new Buffer(str, 'utf-8');

var buf = new Buffer(str);
//for (var i = 0; i < str.length ; i++) {
//  buf[i] = str.charCodeAt(i);
//}

console.log(buf.toString('utf-8'));

app.get('/', function(request, response) {
//  response.send(buf.toString('utf-8'));
  response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
*/

var http = require('http');
var fs = require('fs');
var sys = require('sys');

http.createServer(function(req, res){
    fs.readFile('index.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
}).listen(5000);
