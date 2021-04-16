"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var Tab = _mongoose["default"].model('Tab', new _mongoose["default"].Schema({
  name: String,
  description: String,
  dataPoints: []
}, {
  timestamps: true
}));

var _default = Tab;
exports["default"] = _default;