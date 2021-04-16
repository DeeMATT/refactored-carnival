"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _debug = _interopRequireDefault(require("debug"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _tab = _interopRequireDefault(require("./routes/tab.route"));

// Set up the express app
var app = (0, _express["default"])();
var port = process.env.PORT || 8000;
var debug = (0, _debug["default"])('app'); // Log requests to the console

app.use((0, _morgan["default"])('dev'));
var corsOptions = {
  origin: '*'
};
app.use((0, _cors["default"])(corsOptions)); // parse requests of content-type - application/json

app.use(_bodyParser["default"].json()); // parse requests of content-type - application/x-www-form-urlencoded

app.use(_bodyParser["default"].urlencoded({
  extended: true
}));

var router = _express["default"].Router();

app.use('/api/v1', router);
(0, _tab["default"])(router);
app.get('/', function (req, res) {
  res.json({
    message: 'welcome to climedo api'
  });
});

var kickOff = function kickOff() {
  _mongoose["default"].connect(process.env.DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  }).then(function () {
    app.listen(port, function () {
      debug("Climedo App listening at http://localhost:".concat(port));
    });
  });
};

kickOff();