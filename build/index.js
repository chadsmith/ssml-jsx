"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
Object.defineProperty(exports, "renderToString", {
  enumerable: true,
  get: function () {
    return _renderToString2.default;
  }
});

var _ssml = _interopRequireDefault(require("./ssml"));

var _renderToString2 = _interopRequireDefault(require("./renderToString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _ssml.default;
exports.default = _default;