'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var keyboard = require('./keyboard.js');
var index = require('./pointer/index.js');

/**
 * @internal Do not create/alter this by yourself as this type might be subject to changes.
 */ class System {
    getUIEventModifiers() {
        return {
            altKey: this.keyboard.modifiers.Alt,
            ctrlKey: this.keyboard.modifiers.Control,
            metaKey: this.keyboard.modifiers.Meta,
            shiftKey: this.keyboard.modifiers.Shift,
            modifierAltGraph: this.keyboard.modifiers.AltGraph,
            modifierCapsLock: this.keyboard.modifiers.CapsLock,
            modifierFn: this.keyboard.modifiers.Fn,
            modifierFnLock: this.keyboard.modifiers.FnLock,
            modifierNumLock: this.keyboard.modifiers.NumLock,
            modifierScrollLock: this.keyboard.modifiers.ScrollLock,
            modifierSymbol: this.keyboard.modifiers.Symbol,
            modifierSymbolLock: this.keyboard.modifiers.SymbolLock
        };
    }
    constructor(){
        this.keyboard = new keyboard.KeyboardHost(this);
        this.pointer = new index.PointerHost(this);
    }
}

exports.System = System;
