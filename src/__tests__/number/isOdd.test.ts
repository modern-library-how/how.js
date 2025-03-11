import { expect, test } from 'vitest';
import { isOdd } from '../../number/isOdd';

test('isOdd 테스트', () => {
  //짝수 테스트
  expect(isOdd(0)).toBe(false);
  expect(isOdd(-32)).toBe(false);
  expect(isOdd(11132)).toBe(false);

  //홀수 테스트
  expect(isOdd(11)).toBe(true);
  expect(isOdd(-23)).toBe(true);

  // Infinity, -Infinity 테스트
  expect(isOdd(Infinity)).toBe(false);
  expect(isOdd(-Infinity)).toBe(false);
});
