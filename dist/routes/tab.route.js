"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _tab = _interopRequireWildcard(require("../controllers/tab.controllers"));

var tabRoutes = function tabRoutes(router) {
  router.use(function (req, res, next) {
    res.header('Access-Control-Allow-Headers', 'x-access-token, Origin, Content-Type, Accept');
    next();
  });
  router.post('/tabs', _tab["default"]);
  router.get('/tabs', _tab.retrieveTabs);
  router.put('/tabs/:tabId', _tab.editTab);
  router["delete"]('/tabs/:tabId', _tab.destroyTab);
};

var _default = tabRoutes;
exports["default"] = _default;