import { expect, test } from 'vitest';
import { isEven } from '../../number/isEven';

test('isEven 테스트', () => {
  //짝수 체크
  expect(isEven(0)).toBe(true);
  expect(isEven(-26)).toBe(true);
  expect(isEven(102)).toBe(true);

  //홀수 체크
  expect(isEven(-11)).toBe(false);
  expect(isEven(233)).toBe(false);

  // Infinity , -Infinity 체크
  expect(isEven(Infinity)).toBe(false);
  expect(isEven(-Infinity)).toBe(false);
});
