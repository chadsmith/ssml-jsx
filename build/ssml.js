"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ssml;

var _index = _interopRequireDefault(require("./schema/index"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ssml(tagName, props = {}, ...children) {
  props = props || {};
  const tag = throwIfUndefined(getTagDefinition(tagName), `Unsupported tag: "${tagName}"`);
  const mergedProps = tag.defaultProps ? { ...tag.defaultProps,
    ...props
  } : props;

  _propTypes.default.checkPropTypes(tag.propTypes, { ...mergedProps,
    children
  }, 'prop', tagName);

  return {
    elementName: tag.type,
    attributes: mergedProps,
    children
  };
}

function throwIfUndefined(item, error) {
  if (!item) {
    throw new Error(error);
  } else {
    return item;
  }
}

function getTagDefinition(tag) {
  switch (typeof tag) {
    case 'string':
      return _index.default[tag];

    case 'function':
      return { ...tag,
        type: tag
      };

    default:
      return undefined;
  }
}