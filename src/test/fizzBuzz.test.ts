import { fizzBuzz } from '../core/fizzbuzz';
describe('Fizzbuzz', () => {
  const BUZZ = 'buzz';
  const FIZZ  = 'fizz'
  const FIZZBUZZ = `${FIZZ}${BUZZ}`;

  it('return number one as a string for number one', () => {
    expect(fizzBuzz(1)).toBe("1");
  })

  it('return number two as a string for number two', () => {
    expect(fizzBuzz(2)).toBe("2");
  })

  it('return fizz for number three', () => {
    expect(fizzBuzz(3)).toBe(FIZZ);
  })

  it('return buzz for number five', () => {
    expect(fizzBuzz(5)).toBe(BUZZ);
  })

  it('return fizzbuzz for number fifteen', () => {
    expect(fizzBuzz(15)).toBe(FIZZBUZZ);
  })

  it('return fizz for any number divisible by three', () => {
    expect(fizzBuzz(6)).toBe(FIZZ);
  })

  it('return buzz for any number divisible by five', () => {
    expect(fizzBuzz(10)).toBe("buzz");
  })

  it('return fizzbuzz for any number divisible by fifteen', () => {
    expect(fizzBuzz(30)).toBe("fizzbuzz");
  })

  it('return number as a string for any number not divisible by three or five', () => {
    expect(fizzBuzz(17)).toBe("17");
  })
})