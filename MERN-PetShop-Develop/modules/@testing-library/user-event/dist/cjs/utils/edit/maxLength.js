'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isElementType = require('../misc/isElementType.js');

var maxLengthSupportedTypes;
(function(maxLengthSupportedTypes) {
    maxLengthSupportedTypes['email'] = 'email';
    maxLengthSupportedTypes['password'] = 'password';
    maxLengthSupportedTypes['search'] = 'search';
    maxLengthSupportedTypes['telephone'] = 'telephone';
    maxLengthSupportedTypes['text'] = 'text';
    maxLengthSupportedTypes['url'] = 'url';
})(maxLengthSupportedTypes || (maxLengthSupportedTypes = {}));
// can't use .maxLength property because of a jsdom bug:
// https://github.com/jsdom/jsdom/issues/2927
function getMaxLength(element) {
    var ref;
    const attr = (ref = element.getAttribute('maxlength')) !== null && ref !== void 0 ? ref : '';
    return /^\d+$/.test(attr) && Number(attr) >= 0 ? Number(attr) : undefined;
}
function supportsMaxLength(element) {
    return isElementType.isElementType(element, 'textarea') || isElementType.isElementType(element, 'input') && element.type in maxLengthSupportedTypes;
}

exports.getMaxLength = getMaxLength;
exports.supportsMaxLength = supportsMaxLength;
