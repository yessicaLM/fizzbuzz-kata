const isDivisibleBy3 = (number: number): boolean => number % 3 === 0;
const isDivisibleBy5 = (number: number): boolean => number % 5 === 0;

export const fizzbuzzCalculator = (number: number): string | number => {
  if (isDivisibleBy3(number) && isDivisibleBy5(number)) return 'fizzbuzz';
  if (isDivisibleBy3(number)) return 'fizz';
  if (isDivisibleBy5(number)) return 'buzz';
  return number;
}
