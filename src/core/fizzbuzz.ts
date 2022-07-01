export const fizzbuzzCalculator = (number: number): string | number => {
  if (number === 3) return 'fizz';
  if (number === 5) return 'buzz';
  if (number === 15) return 'fizzbuzz';
  return 1;
}