"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Indicate information on the type of text construct contained within the element.
 *
 * More info:
 *   https://www.w3.org/TR/speech-synthesis/#S3.1.8
 */
const interpretations = ['characters', 'spell-out', // Spell out each letter
'cardinal', 'number', // Interpret the value as a cardinal number
'ordinal', // Interpret the value as an ordinal number
'digits', // Spell each digit separately
'fraction', // Interpret the value as a fraction
'unit', // Interpret a value as a measurement
'date', // Interpret the value as a date. Specify the format with the format attribute
'time', // Interpret a value such as 1'21" as duration in minutes and seconds
'telephone', // Interpret a value as a 7-digit or 10-digit telephone number
'address', // Interpret a value as part of street address
'interjection', // Interpret a value as an interjection
'expletive' // "Bleep" out the content inside the tag
];
const formats = ['mdy', 'dmy', 'ymd', 'md', 'dm', 'ym', 'my', 'd', 'm', 'y'];
var _default = {
  type: 'say-as',
  propTypes: {
    children: _propTypes.default.any.isRequired,
    'interpret-as': _propTypes.default.oneOf(interpretations).isRequired,
    format: (props, propName, tagName) => {
      if (props['interpret-as'] === 'date') {
        const format = _propTypes.default.oneOf(formats).isRequired;

        return format(props, propName, tagName);
      }
    }
  }
};
exports.default = _default;