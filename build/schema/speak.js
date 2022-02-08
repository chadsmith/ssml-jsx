"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This is the root element of an SSML document.
 *
 * More info:
 *   https://www.w3.org/TR/speech-synthesis/#S3.1.1
 */
var _default = {
  type: 'speak',
  propTypes: {
    children: _propTypes.default.any.isRequired
  }
};
exports.default = _default;