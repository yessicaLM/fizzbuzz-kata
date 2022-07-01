import { fizzbuzzCalculator } from '../core/fizzbuzz';
// 1 -> 1 --> DONE
// 3 -> fizz --> DONE
// 5 -> buzz --> DONE
// 15 -> fizzbuzz --> DONE
// n % 3 = 0 -> fizz --> DONE
// n % 5 = 0 -> buzz --> DONE
// n % 15 = 9 -> fizzbuz --> DONE
// other nums -> nums --> DONE


describe('fizzbuzz kata', () => {
  it('given 1 returns 1', () => {
    expect(fizzbuzzCalculator(1)).toBe(1);
  });

  it('given 3 returns fizz', () => {
    expect(fizzbuzzCalculator(3)).toBe('fizz');
  });

  it('given 5 returns buzz', () => {
    expect(fizzbuzzCalculator(5)).toBe('buzz');
  });

  it('given 15 returns fizzbuzz', () => {
    expect(fizzbuzzCalculator(15)).toBe('fizzbuzz');
  });

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