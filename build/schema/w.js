"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Similar to <say-as>, this tag customizes the pronunciation of words by specifying the word’s part of speech.
 *
 * More info:
 *   https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference#w
 */
var _default = {
  type: 'w',
  propTypes: {
    role: _propTypes.default.oneOf(['amazon:VB', 'amazon:VBD', 'amazon:NN', 'amazon:SENSE_1']),
    children: _propTypes.default.any.isRequired
  }
};
exports.default = _default;