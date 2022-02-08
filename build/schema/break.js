"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _customPropTypes = require("../custom-prop-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Represents a pause in the speech. Set the length of the pause with the strength or time attributes.
 *
 * More info:
 *   https://www.w3.org/TR/speech-synthesis/#S3.2.3
 */
const Strengths = ['none', // No pause should be outputted. This can be used to remove a pause that would normally occur (such as after a period).
'x-weak', // No pause should be outputted (same as none).
'weak', // Treat adjacent words as if separated by a single comma (equivalent to medium).
'medium', // Treat adjacent words as if separated by a single comma.
'strong', // Make a sentence break (equivalent to using the <s> tag).
'x-strong' // Make a paragraph break (equivalent to using the <p> tag).
];
var _default = {
  type: 'break',
  propTypes: {
    strength: _propTypes.default.oneOf(Strengths),
    time: (0, _customPropTypes.match)(/(\d+)(m?s)?/),
    children: _customPropTypes.none
  }
};
exports.default = _default;