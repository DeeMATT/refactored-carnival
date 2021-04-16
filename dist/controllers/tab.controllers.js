"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.destroyTab = exports.editTab = exports.retrieveTabs = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _tab = _interopRequireDefault(require("../models/tab.model"));

var createTabs = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, name, description, dataPoints, newTab, savedTab, tab;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, name = _req$body.name, description = _req$body.description, dataPoints = _req$body.dataPoints;
            newTab = new _tab["default"]({
              name: name,
              description: description,
              dataPoints: dataPoints
            });
            _context.next = 5;
            return newTab.save();

          case 5:
            savedTab = _context.sent;
            tab = {
              name: savedTab.name,
              description: savedTab.description,
              dataPoints: savedTab.dataPoints
            };
            return _context.abrupt("return", res.status(200).send({
              message: 'Tab created successfully',
              status: 'success',
              data: {
                tab: tab
              }
            }));

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);
            return _context.abrupt("return", res.status(500).send({
              message: _context.t0.message,
              status: 'error',
              data: null
            }));

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function createTabs(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var retrieveTabs = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var tabsData, tabs;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _tab["default"].find();

          case 3:
            tabsData = _context2.sent;
            tabs = tabsData.map(function (tab) {
              return {
                id: tab._id,
                name: tab.name,
                description: tab.description,
                dataPoints: tab.dataPoints
              };
            });
            return _context2.abrupt("return", res.status(200).send({
              message: 'Tabs created successfully',
              status: 'success',
              data: {
                tabs: tabs
              }
            }));

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            console.error(_context2.t0);
            return _context2.abrupt("return", res.status(500).send({
              message: _context2.t0.message,
              status: 'error',
              data: null
            }));

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));

  return function retrieveTabs(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.retrieveTabs = retrieveTabs;

var editTab = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var tabId, _req$body2, name, description, dataPoints, tabUpdate, tab;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            tabId = req.params.tabId;
            _req$body2 = req.body, name = _req$body2.name, description = _req$body2.description, dataPoints = _req$body2.dataPoints;
            _context3.next = 5;
            return _tab["default"].findOneAndUpdate({
              _id: tabId
            }, {
              name: name,
              description: description,
              dataPoints: dataPoints
            }, {
              "new": true
            });

          case 5:
            tabUpdate = _context3.sent;

            if (tabUpdate) {
              _context3.next = 8;
              break;
            }

            return _context3.abrupt("return", res.status(400).send({
              message: 'Tab does not exist',
              status: 'error',
              data: null
            }));

          case 8:
            tab = {
              name: tabUpdate.name,
              description: tabUpdate.description,
              dataPoints: tabUpdate.dataPoints
            };
            return _context3.abrupt("return", res.status(200).send({
              message: 'Tab was updated successfully',
              status: 'success',
              data: {
                tab: tab
              }
            }));

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](0);
            console.error(_context3.t0);
            return _context3.abrupt("return", res.status(500).send({
              message: _context3.t0.message,
              status: 'error',
              data: null
            }));

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 12]]);
  }));

  return function editTab(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.editTab = editTab;

var destroyTab = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var tabId;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            tabId = req.params.tabId;
            _context4.next = 4;
            return _tab["default"].deleteOne({
              _id: tabId
            });

          case 4:
            return _context4.abrupt("return", res.status(200).send({
              message: 'Tab was deleted successfully',
              status: 'success',
              data: null
            }));

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            console.error(_context4.t0);
            return _context4.abrupt("return", res.status(500).send({
              message: _context4.t0.message,
              status: 'error',
              data: null
            }));

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));

  return function destroyTab(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.destroyTab = destroyTab;
var _default = createTabs;
exports["default"] = _default;