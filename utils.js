"use strict";
const _deepClone = (obj) => {
    return JSON.parse(JSON.stringify(obj));
};
module.exports = _deepClone;
