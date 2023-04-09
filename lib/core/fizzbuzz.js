"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fizzBuzz = void 0;
function fizzBuzz(number) {
    function isDivisible(divisor) {
        return number % divisor === 0;
    }
    if (isDivisible(15)) {
        return "fizzbuzz";
    }
    if (isDivisible(3)) {
        return "fizz";
    }
    if (isDivisible(5)) {
        return "buzz";
    }
    return number.toString();
}
exports.fizzBuzz = fizzBuzz;
//# sourceMappingURL=fizzbuzz.js.map