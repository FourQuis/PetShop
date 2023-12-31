import _isFunction from "lodash/isFunction";
var _excluded = ["component"];
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * @fileOverview Customized
 */
import React, { isValidElement, cloneElement, createElement } from 'react';
import { Layer } from '../container/Layer';
import { warn } from '../util/LogUtils';
/**
 * custom svg elements by rechart instance props and state.
 * @returns {Object}   svg elements
 */
export function Customized(_ref) {
  var component = _ref.component,
    props = _objectWithoutProperties(_ref, _excluded);
  var child;
  if ( /*#__PURE__*/isValidElement(component)) {
    child = /*#__PURE__*/cloneElement(component, props);
  } else if (_isFunction(component)) {
    child = /*#__PURE__*/createElement(component, props);
  } else {
    warn(false, "Customized's props `component` must be React.element or Function, but got %s.", _typeof(component));
  }
  return /*#__PURE__*/React.createElement(Layer, {
    className: "recharts-customized-wrapper"
  }, child);
}
Customized.displayName = 'Customized';