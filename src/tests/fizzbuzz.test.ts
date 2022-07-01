import { fizzbuzzCalculator } from '../core/fizzbuzz';

describe('fizzbuzz kata', () => {
  it('given a number divisible by 3 returns fizz', () => {
    const expected = 'fizz';
    const currentValue = 6;

    expect(fizzbuzzCalculator(currentValue)).toBe(expected);
  });

  it('given a number divisible by 5 returns buzz', () => {
    const expected = 'buzz';
    const currentValue = 10;

    expect(fizzbuzzCalculator(currentValue)).toBe(expected);
  });

  it('given a number divisible by 3 and 5 returns fizzbuzz', () => {
    const expected = 'fizzbuzz';
    const currentValue = 30;

    expect(fizzbuzzCalculator(currentValue)).toBe(expected);
  });

  it('given a number not divisible by 3 and 5 returns the number', () => {
    const expected = 31;
    const currentValue = 31;

    expect(fizzbuzzCalculator(currentValue)).toBe(expected);
  });
});