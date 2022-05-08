"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

let apply = (action, ...argus) => {
  require(`./${action}`)(...argus);
};

var _default = apply;
exports.default = _default;