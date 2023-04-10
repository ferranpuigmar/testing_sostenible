"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fizzbuzz_1 = require("../core/fizzbuzz");
describe('Fizzbuzz', () => {
    const BUZZ = 'buzz';
    const FIZZ = 'fizz';
    const FIZZBUZZ = `${FIZZ}${BUZZ}`;
    it('return number one as a string for number one', () => {
        expect((0, fizzbuzz_1.fizzBuzz)(1)).toBe("1");
    });
    it('return number two as a string for number two', () => {
        expect((0, fizzbuzz_1.fizzBuzz)(2)).toBe("2");
    });
    it('return fizz for number three', () => {
        expect((0, fizzbuzz_1.fizzBuzz)(3)).toBe(FIZZ);
    });
    it('return buzz for number five', () => {
        expect((0, fizzbuzz_1.fizzBuzz)(5)).toBe(BUZZ);
    });
    it('return fizzbuzz for number fifteen', () => {
        expect((0, fizzbuzz_1.fizzBuzz)(15)).toBe(FIZZBUZZ);
    });
    it('return fizz for any number divisible by three', () => {
        expect((0, fizzbuzz_1.fizzBuzz)(6)).toBe(FIZZ);
    });
    it('return buzz for any number divisible by five', () => {
        expect((0, fizzbuzz_1.fizzBuzz)(10)).toBe("buzz");
    });
    it('return fizzbuzz for any number divisible by fifteen', () => {
        expect((0, fizzbuzz_1.fizzBuzz)(30)).toBe("fizzbuzz");
    });
    it('return number as a string for any number not divisible by three or five', () => {
        expect((0, fizzbuzz_1.fizzBuzz)(17)).toBe("17");
    });
});
//# sourceMappingURL=fizzBuzz.test.js.map