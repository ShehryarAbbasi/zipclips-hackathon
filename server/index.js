var express = require('express'),
  http = require('http');

var events = require('./data/events.json');
var clips = require('./data/clips.json');
// var reservations = [];

var app = express()
  .use(express.bodyParser())
  .use(express.static('public'));

var path = require('path');

app.get('/', function (req, res) {
  
});

app.get('/events', function  (req, res) {
  res.json(events);
});

app.get('/clips', function (req, res) {
  res.json(clips);
});

app.get('/*', function  (req, res) {
  res.json(404, {status: 'not found'});
});

http.createServer(app).listen(3000, function () {
  console.log("Server ready at http://localhost:3000");
});