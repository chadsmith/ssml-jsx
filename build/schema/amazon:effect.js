"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Applies Amazon-specific effects to the speech.
 *
 * More info:
 *   https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference#amazon-effect
 */
var _default = {
  type: 'amazon:effect',
  propTypes: {
    name: _propTypes.default.oneOf(['whispered']),
    children: _propTypes.default.any.isRequired
  }
};
exports.default = _default;