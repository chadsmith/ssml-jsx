"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _customPropTypes = require("../custom-prop-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Modifies the volume, pitch, and rate of the tagged speech.
 *
 * More info:
 *   https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference#prosody
 */
var _default = {
  type: 'prosody',
  propTypes: {
    rate: _propTypes.default.oneOfType([_propTypes.default.oneOf(['x-slow', 'slow', 'medium', 'fast', 'x-fast']), (0, _customPropTypes.match)(/[1-9][0-9]*%/)]),
    pitch: _propTypes.default.oneOfType([_propTypes.default.oneOf(['x-low', 'low', 'medium', 'high', 'x-high']), (0, _customPropTypes.match)(/[+-][1-9][0-9]*%/)]),
    volume: _propTypes.default.oneOfType([_propTypes.default.oneOf(['silent', 'x-soft', 'soft', 'medium', 'loud', 'x-loud']), (0, _customPropTypes.match)(/[+-][0-9]+(?:[.][0-9]+)?dB/)]),
    children: _propTypes.default.any.isRequired
  }
};
exports.default = _default;