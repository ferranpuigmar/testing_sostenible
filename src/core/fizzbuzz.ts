export function fizzBuzz(number: number) {

  function isDivisible(divisor: number){
    return number % divisor === 0
  }

  if(isDivisible(15)) {
    return "fizzbuzz"
  }

  if(isDivisible(3)) {
    return "fizz"
  }

  if(isDivisible(5)) {
    return "buzz"
  }

  return number.toString();
}