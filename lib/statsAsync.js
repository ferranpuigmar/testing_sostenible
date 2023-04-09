"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.average = exports.sum = void 0;
const stats = require("./stats");
function sum(numbers) {
    return Promise.resolve(stats.sum(numbers));
}
exports.sum = sum;
function average(numbers) {
    return Promise.resolve(stats.average(numbers));
}
exports.average = average;
//# sourceMappingURL=statsAsync.js.map