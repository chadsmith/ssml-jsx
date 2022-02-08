"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The audio tag lets you provide the URL for an MP3 file that the Alexa service can play while rendering a response.
 * You can use this to embed short, pre-recorded audio within your service’s response.
 *
 * More info:
 *   https://www.w3.org/TR/speech-synthesis/#S3.3.1
 */
var _default = {
  type: 'audio',
  propTypes: {
    src: _propTypes.default.string.isRequired,
    children: _propTypes.default.any
  }
};
exports.default = _default;