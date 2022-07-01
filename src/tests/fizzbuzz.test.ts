import { fizzbuzzCalculator } from '../core/fizzbuzz';
// 1 -> 1 --> DONE
// 3 -> fizz
// 5 -> buzz
// 15 -> fizzbuzz
// n % 3 = 0 -> fizz
// n % 5 = 0 -> buzz
// n % 15 = 9 -> fizzbuz
// other nums -> nums


describe('fizzbuzz kata', () => {
  it('given 1 returns 1', () => {
    expect(fizzbuzzCalculator(1)).toBe(1);
  });

  it('given 3 returns fizz', () => {
    expect(fizzbuzzCalculator(3)).toBe('fizz');
  });
});