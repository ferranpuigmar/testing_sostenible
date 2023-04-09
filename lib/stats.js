"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.average = exports.sum = void 0;
function sum(numbers) {
    return numbers.reduce((previous, current) => previous + current);
}
exports.sum = sum;
function average(numbers) {
    return sum(numbers) / numbers.length;
}
exports.average = average;
//# sourceMappingURL=stats.js.map