"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.none = exports.match = void 0;

const match = regex => (props, propName, tagName) => {
  const value = props && props[propName];

  if (value && !regex.exec(value)) {
    return new Error(`Invalid value for prop "${propName}" on "${tagName}" tag. Expected "${value}" to match ${regex.toString()}.`);
  }
};

exports.match = match;

const none = (props, propName, tagName) => {
  if (props && props[propName]) {
    return new Error(`Unexpected prop "${propName}" on "${tagName}" tag. Expected none.`);
  }
};

exports.none = none;