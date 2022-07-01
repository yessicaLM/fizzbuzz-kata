import { fizzbuzzCalculator } from '../core/fizzbuzz';

describe('fizzbuzz kata', () => {
  it('given a number divisible by 3 returns fizz', () => {
    expect(fizzbuzzCalculator(6)).toBe('fizz');
  });

  it('given a number divisible by 5 returns buzz', () => {
    expect(fizzbuzzCalculator(10)).toBe('buzz');
  });

  it('given a number divisible by 3 and 5 returns fizzbuzz', () => {
    expect(fizzbuzzCalculator(30)).toBe('fizzbuzz');
  });

  it('given a number not divisible by 3 and 5 returns the number', () => {
    expect(fizzbuzzCalculator(31)).toBe(31);
  });
});