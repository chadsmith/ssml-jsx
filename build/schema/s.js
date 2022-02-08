"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Represents a sentence. This tag provides strong breaks before and after the tag.
 *
 * More info:
 *   https://www.w3.org/TR/speech-synthesis/#S3.1.7
 */
var _default = {
  type: 's',
  propTypes: {
    children: _propTypes.default.any.isRequired
  }
};
exports.default = _default;