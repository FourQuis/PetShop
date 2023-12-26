'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isDisabled = require('../misc/isDisabled.js');
var isElementType = require('../misc/isElementType.js');
var isVisible = require('../misc/isVisible.js');
var selector = require('./selector.js');

function getTabDestination(activeElement, shift) {
    const document = activeElement.ownerDocument;
    const focusableElements = document.querySelectorAll(selector.FOCUSABLE_SELECTOR);
    const enabledElements = Array.from(focusableElements).filter((el)=>el === activeElement || !(Number(el.getAttribute('tabindex')) < 0 || isDisabled.isDisabled(el)));
    // tabindex has no effect if the active element has negative tabindex
    if (Number(activeElement.getAttribute('tabindex')) >= 0) {
        enabledElements.sort((a, b)=>{
            const i = Number(a.getAttribute('tabindex'));
            const j = Number(b.getAttribute('tabindex'));
            if (i === j) {
                return 0;
            } else if (i === 0) {
                return 1;
            } else if (j === 0) {
                return -1;
            }
            return i - j;
        });
    }
    const checkedRadio = {};
    let prunedElements = [
        document.body
    ];
    const activeRadioGroup = isElementType.isElementType(activeElement, 'input', {
        type: 'radio'
    }) ? activeElement.name : undefined;
    enabledElements.forEach((currentElement)=>{
        const el = currentElement;
        // For radio groups keep only the active radio
        // If there is no active radio, keep only the checked radio
        // If there is no checked radio, treat like everything else
        if (isElementType.isElementType(el, 'input', {
            type: 'radio'
        }) && el.name) {
            // If the active element is part of the group, add only that
            if (el === activeElement) {
                prunedElements.push(el);
                return;
            } else if (el.name === activeRadioGroup) {
                return;
            }
            // If we stumble upon a checked radio, remove the others
            if (el.checked) {
                prunedElements = prunedElements.filter((e)=>!isElementType.isElementType(e, 'input', {
                        type: 'radio',
                        name: el.name
                    }));
                prunedElements.push(el);
                checkedRadio[el.name] = el;
                return;
            }
            // If we already found the checked one, skip
            if (typeof checkedRadio[el.name] !== 'undefined') {
                return;
            }
        }
        prunedElements.push(el);
    });
    for(let index = prunedElements.findIndex((el)=>el === activeElement);;){
        index += shift ? -1 : 1;
        // loop at overflow
        if (index === prunedElements.length) {
            index = 0;
        } else if (index === -1) {
            index = prunedElements.length - 1;
        }
        if (prunedElements[index] === activeElement || prunedElements[index] === document.body || isVisible.isVisible(prunedElements[index])) {
            return prunedElements[index];
        }
    }
}

exports.getTabDestination = getTabDestination;
