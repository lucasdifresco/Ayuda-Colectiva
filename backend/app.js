const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

const http = require('http');

const app = express();

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

require('./routes')(app);

app.get("*", (req, res) => res.status(200).send({
  message: "Estamos en el aire",
}));

// Setup server port
var port = process.env.PORT || 8080;
console.log(port);
const server = http.createServer(app);
server.listen(port);

module.exports = app;