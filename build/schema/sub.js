"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Pronounce the specified word or phrase as a different word or phrase. Specify the pronunciation to substitute with
 * the alias attribute.
 *
 * More info:
 *   https://www.w3.org/TR/speech-synthesis/#edef_sub
 */
var _default = {
  type: 'sub',
  propTypes: {
    alias: _propTypes.default.string.isRequired,
    children: _propTypes.default.any.isRequired
  }
};
exports.default = _default;