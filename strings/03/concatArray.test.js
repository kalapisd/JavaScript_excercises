import {concatArrays} from './concatArray.js';
import {describe, expect, test } from 'vitest';

describe('concatArrays ', () => {
  test('should return an array without duplicated elements, and withou elements witch contains a character and trim them', () => {
    const arr1 = ['alma', 'körte', 'szilva'];
    const arr2 = ['alma', 'banán', 'csersznye'];
    const char = 'ö';

    const result = concatArrays(char, arr1, arr2);
    const expected = ['alma', 'szilva', 'banán', 'csersznye'];

    expect(result).toEqual(expected);
  });

  test('should return an enpty array if all elements contain the character', () => {
    const arr1 = ['alma'];
    const arr2 = ['alma'];
    const char = 'a';

    const result = concatArrays(char, arr1, arr2);
    const expected = [];

    expect(result).toEqual(expected);
  });
});