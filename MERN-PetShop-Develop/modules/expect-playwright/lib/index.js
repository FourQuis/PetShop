"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchers = void 0;
const matchers_1 = __importDefault(require("./matchers"));
exports.matchers = matchers_1.default;
// @ts-ignore
if (typeof global.expect !== "undefined") {
    // @ts-ignore
    global.expect.extend(matchers_1.default);
}
