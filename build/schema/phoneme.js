"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Provides a phonemic/phonetic pronunciation for the contained text. For example, people may pronounce words like
 * “pecan” differently.
 *
 * More info:
 *   https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference#phoneme
 */
var _default = {
  type: 'phoneme',
  propTypes: {
    alphabet: _propTypes.default.oneOf(['ipa', 'x-sampa']).isRequired,
    ph: _propTypes.default.string.isRequired,
    children: _propTypes.default.any.isRequired
  }
};
exports.default = _default;