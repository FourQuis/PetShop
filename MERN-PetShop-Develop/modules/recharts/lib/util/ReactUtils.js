"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterSvgElements = exports.filterProps = exports.TOOLTIP_TYPES = exports.SCALE_TYPES = exports.LEGEND_TYPES = void 0;
exports.findAllByType = findAllByType;
exports.findChildByType = findChildByType;
exports.withoutType = exports.validateWidthHeight = exports.toArray = exports.renderByOrder = exports.parseChildIndex = exports.isValidSpreadableProp = exports.isSingleChildEqual = exports.isChildrenEqual = exports.getReactEventByType = exports.getDisplayName = void 0;
var _isObject2 = _interopRequireDefault(require("lodash/isObject"));
var _isFunction2 = _interopRequireDefault(require("lodash/isFunction"));
var _isString2 = _interopRequireDefault(require("lodash/isString"));
var _get2 = _interopRequireDefault(require("lodash/get"));
var _isNil2 = _interopRequireDefault(require("lodash/isNil"));
var _isArray2 = _interopRequireDefault(require("lodash/isArray"));
var _react = require("react");
var _reactIs = require("react-is");
var _DataUtils = require("./DataUtils");
var _ShallowEqual = require("./ShallowEqual");
var _types = require("./types");
var _excluded = ["children"],
  _excluded2 = ["children"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var REACT_BROWSER_EVENT_MAP = {
  click: 'onClick',
  mousedown: 'onMouseDown',
  mouseup: 'onMouseUp',
  mouseover: 'onMouseOver',
  mousemove: 'onMouseMove',
  mouseout: 'onMouseOut',
  mouseenter: 'onMouseEnter',
  mouseleave: 'onMouseLeave',
  touchcancel: 'onTouchCancel',
  touchend: 'onTouchEnd',
  touchmove: 'onTouchMove',
  touchstart: 'onTouchStart'
};
var SCALE_TYPES = ['auto', 'linear', 'pow', 'sqrt', 'log', 'identity', 'time', 'band', 'point', 'ordinal', 'quantile', 'quantize', 'utc', 'sequential', 'threshold'];
exports.SCALE_TYPES = SCALE_TYPES;
var LEGEND_TYPES = ['plainline', 'line', 'square', 'rect', 'circle', 'cross', 'diamond', 'star', 'triangle', 'wye', 'none'];
exports.LEGEND_TYPES = LEGEND_TYPES;
var TOOLTIP_TYPES = ['none'];

/**
 * Get the display name of a component
 * @param  {Object} Comp Specified Component
 * @return {String}      Display name of Component
 */
exports.TOOLTIP_TYPES = TOOLTIP_TYPES;
var getDisplayName = function getDisplayName(Comp) {
  if (typeof Comp === 'string') {
    return Comp;
  }
  if (!Comp) {
    return '';
  }
  return Comp.displayName || Comp.name || 'Component';
};

// `toArray` gets called multiple times during the render
// so we can memoize last invocation (since reference to `children` is the same)
exports.getDisplayName = getDisplayName;
var lastChildren = null;
var lastResult = null;
var toArray = function toArray(children) {
  if (children === lastChildren && (0, _isArray2["default"])(lastResult)) {
    return lastResult;
  }
  var result = [];
  _react.Children.forEach(children, function (child) {
    if ((0, _isNil2["default"])(child)) return;
    if ((0, _reactIs.isFragment)(child)) {
      result = result.concat(toArray(child.props.children));
    } else {
      result.push(child);
    }
  });
  lastResult = result;
  lastChildren = children;
  return result;
};

/*
 * Find and return all matched children by type.
 * `type` must be a React.ComponentType
 */
exports.toArray = toArray;
function findAllByType(children, type) {
  var result = [];
  var types = [];
  if ((0, _isArray2["default"])(type)) {
    types = type.map(function (t) {
      return getDisplayName(t);
    });
  } else {
    types = [getDisplayName(type)];
  }
  toArray(children).forEach(function (child) {
    var childType = (0, _get2["default"])(child, 'type.displayName') || (0, _get2["default"])(child, 'type.name');
    if (types.indexOf(childType) !== -1) {
      result.push(child);
    }
  });
  return result;
}

/*
 * Return the first matched child by type, return null otherwise.
 * `type` must be a React.ComponentType
 */
function findChildByType(children, type) {
  var result = findAllByType(children, type);
  return result && result[0];
}

/*
 * Create a new array of children excluding the ones matched the type
 */
var withoutType = function withoutType(children, type) {
  var newChildren = [];
  var types;
  if ((0, _isArray2["default"])(type)) {
    types = type.map(function (t) {
      return getDisplayName(t);
    });
  } else {
    types = [getDisplayName(type)];
  }
  toArray(children).forEach(function (child) {
    var displayName = (0, _get2["default"])(child, 'type.displayName');
    if (displayName && types.indexOf(displayName) !== -1) {
      return;
    }
    newChildren.push(child);
  });
  return newChildren;
};

/**
 * validate the width and height props of a chart element
 * @param  {Object} el A chart element
 * @return {Boolean}   true If the props width and height are number, and greater than 0
 */
exports.withoutType = withoutType;
var validateWidthHeight = function validateWidthHeight(el) {
  if (!el || !el.props) {
    return false;
  }
  var _el$props = el.props,
    width = _el$props.width,
    height = _el$props.height;
  if (!(0, _DataUtils.isNumber)(width) || width <= 0 || !(0, _DataUtils.isNumber)(height) || height <= 0) {
    return false;
  }
  return true;
};
exports.validateWidthHeight = validateWidthHeight;
var SVG_TAGS = ['a', 'altGlyph', 'altGlyphDef', 'altGlyphItem', 'animate', 'animateColor', 'animateMotion', 'animateTransform', 'circle', 'clipPath', 'color-profile', 'cursor', 'defs', 'desc', 'ellipse', 'feBlend', 'feColormatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence', 'filter', 'font', 'font-face', 'font-face-format', 'font-face-name', 'font-face-url', 'foreignObject', 'g', 'glyph', 'glyphRef', 'hkern', 'image', 'line', 'lineGradient', 'marker', 'mask', 'metadata', 'missing-glyph', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'script', 'set', 'stop', 'style', 'svg', 'switch', 'symbol', 'text', 'textPath', 'title', 'tref', 'tspan', 'use', 'view', 'vkern'];
var isSvgElement = function isSvgElement(child) {
  return child && child.type && (0, _isString2["default"])(child.type) && SVG_TAGS.indexOf(child.type) >= 0;
};

/**
 * Checks if the property is valid to spread onto an SVG element or onto a specific component
 * @param {unknown} property property value currently being compared
 * @param {string} key property key currently being compared
 * @param {boolean} includeEvents if events are included in spreadable props
 * @param {boolean} svgElementType checks against map of SVG element types to attributes
 * @returns {boolean} is prop valid
 */
var isValidSpreadableProp = function isValidSpreadableProp(property, key, includeEvents, svgElementType) {
  var _FilteredElementKeyMa;
  /**
   * If the svg element type is explicitly included, check against the filtered element key map
   * to determine if there are attributes that should only exist on that element type.
   * @todo Add an internal cjs version of https://github.com/wooorm/svg-element-attributes for full coverage.
   */
  var matchingElementTypeKeys = (_FilteredElementKeyMa = _types.FilteredElementKeyMap === null || _types.FilteredElementKeyMap === void 0 ? void 0 : _types.FilteredElementKeyMap[svgElementType]) !== null && _FilteredElementKeyMa !== void 0 ? _FilteredElementKeyMa : [];
  return !(0, _isFunction2["default"])(property) && (svgElementType && matchingElementTypeKeys.includes(key) || _types.SVGElementPropKeys.includes(key)) || includeEvents && _types.EventKeys.includes(key);
};

/**
 * Filter all the svg elements of children
 * @param  {Array} children The children of a react element
 * @return {Array}          All the svg elements
 */
exports.isValidSpreadableProp = isValidSpreadableProp;
var filterSvgElements = function filterSvgElements(children) {
  var svgElements = [];
  toArray(children).forEach(function (entry) {
    if (isSvgElement(entry)) {
      svgElements.push(entry);
    }
  });
  return svgElements;
};
exports.filterSvgElements = filterSvgElements;
var filterProps = function filterProps(props, includeEvents, svgElementType) {
  if (!props || typeof props === 'function' || typeof props === 'boolean') {
    return null;
  }
  var inputProps = props;
  if ( /*#__PURE__*/(0, _react.isValidElement)(props)) {
    inputProps = props.props;
  }
  if (!(0, _isObject2["default"])(inputProps)) {
    return null;
  }
  var out = {};

  /**
   * Props are blindly spread onto SVG elements. This loop filters out properties that we don't want to spread.
   * Items filtered out are as follows:
   *   - functions in properties that are SVG attributes (functions are included when includeEvents is true)
   *   - props that are SVG attributes but don't matched the passed svgElementType
   *   - any prop that is not in SVGElementPropKeys (or in EventKeys if includeEvents is true)
   */
  Object.keys(inputProps).forEach(function (key) {
    var _inputProps;
    if (isValidSpreadableProp((_inputProps = inputProps) === null || _inputProps === void 0 ? void 0 : _inputProps[key], key, includeEvents, svgElementType)) {
      out[key] = inputProps[key];
    }
  });
  return out;
};

/**
 * Wether props of children changed
 * @param  {Object} nextChildren The latest children
 * @param  {Object} prevChildren The prev children
 * @return {Boolean}             equal or not
 */
exports.filterProps = filterProps;
var isChildrenEqual = function isChildrenEqual(nextChildren, prevChildren) {
  if (nextChildren === prevChildren) {
    return true;
  }
  var count = _react.Children.count(nextChildren);
  if (count !== _react.Children.count(prevChildren)) {
    return false;
  }
  if (count === 0) {
    return true;
  }
  if (count === 1) {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return isSingleChildEqual((0, _isArray2["default"])(nextChildren) ? nextChildren[0] : nextChildren, (0, _isArray2["default"])(prevChildren) ? prevChildren[0] : prevChildren);
  }
  for (var i = 0; i < count; i++) {
    var nextChild = nextChildren[i];
    var prevChild = prevChildren[i];
    if ((0, _isArray2["default"])(nextChild) || (0, _isArray2["default"])(prevChild)) {
      if (!isChildrenEqual(nextChild, prevChild)) {
        return false;
      }
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
    } else if (!isSingleChildEqual(nextChild, prevChild)) {
      return false;
    }
  }
  return true;
};
exports.isChildrenEqual = isChildrenEqual;
var isSingleChildEqual = function isSingleChildEqual(nextChild, prevChild) {
  if ((0, _isNil2["default"])(nextChild) && (0, _isNil2["default"])(prevChild)) {
    return true;
  }
  if (!(0, _isNil2["default"])(nextChild) && !(0, _isNil2["default"])(prevChild)) {
    var _ref = nextChild.props || {},
      nextChildren = _ref.children,
      nextProps = _objectWithoutProperties(_ref, _excluded);
    var _ref2 = prevChild.props || {},
      prevChildren = _ref2.children,
      prevProps = _objectWithoutProperties(_ref2, _excluded2);
    if (nextChildren && prevChildren) {
      return (0, _ShallowEqual.shallowEqual)(nextProps, prevProps) && isChildrenEqual(nextChildren, prevChildren);
    }
    if (!nextChildren && !prevChildren) {
      return (0, _ShallowEqual.shallowEqual)(nextProps, prevProps);
    }
    return false;
  }
  return false;
};
exports.isSingleChildEqual = isSingleChildEqual;
var renderByOrder = function renderByOrder(children, renderMap) {
  var elements = [];
  var record = {};
  toArray(children).forEach(function (child, index) {
    if (isSvgElement(child)) {
      elements.push(child);
    } else if (child) {
      var displayName = getDisplayName(child.type);
      var _ref3 = renderMap[displayName] || {},
        handler = _ref3.handler,
        once = _ref3.once;
      if (handler && (!once || !record[displayName])) {
        var results = handler(child, displayName, index);
        elements.push(results);
        record[displayName] = true;
      }
    }
  });
  return elements;
};
exports.renderByOrder = renderByOrder;
var getReactEventByType = function getReactEventByType(e) {
  var type = e && e.type;
  if (type && REACT_BROWSER_EVENT_MAP[type]) {
    return REACT_BROWSER_EVENT_MAP[type];
  }
  return null;
};
exports.getReactEventByType = getReactEventByType;
var parseChildIndex = function parseChildIndex(child, children) {
  return toArray(children).indexOf(child);
};
exports.parseChildIndex = parseChildIndex;