"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _amazonEffect = _interopRequireDefault(require("./amazon:effect"));

var _audio = _interopRequireDefault(require("./audio"));

var _break = _interopRequireDefault(require("./break"));

var _emphasis = _interopRequireDefault(require("./emphasis"));

var _p = _interopRequireDefault(require("./p"));

var _phoneme = _interopRequireDefault(require("./phoneme"));

var _prosody = _interopRequireDefault(require("./prosody"));

var _s = _interopRequireDefault(require("./s"));

var _sayAs = _interopRequireDefault(require("./say-as"));

var _speak = _interopRequireDefault(require("./speak"));

var _sub = _interopRequireDefault(require("./sub"));

var _w = _interopRequireDefault(require("./w"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  'amazon:effect': _amazonEffect.default,
  audio: _audio.default,
  break: _break.default,
  emphasis: _emphasis.default,
  p: _p.default,
  phoneme: _phoneme.default,
  prosody: _prosody.default,
  s: _s.default,
  'say-as': _sayAs.default,
  speak: _speak.default,
  sub: _sub.default,
  w: _w.default
};
exports.default = _default;