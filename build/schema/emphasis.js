"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Emphasize the tagged words or phrases. Emphasis changes rate and volume of the speech. More emphasis is spoken louder
 * and slower. Less emphasis is quieter and faster.
 *
 * More info:
 *   https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference#emphasis
 */
var _default = {
  type: 'emphasis',
  propTypes: {
    level: _propTypes.default.oneOf(['strong', 'moderate', 'reduced']),
    children: _propTypes.default.any.isRequired
  }
};
exports.default = _default;