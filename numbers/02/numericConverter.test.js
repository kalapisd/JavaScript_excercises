import {numericConverter} from './numericConverter.js';
import { describe, expect, test } from 'vitest';

describe('numericConverter ', () => {
  test('should return an object with binary, hex and octal properties, and these contains the match values', () => {
    const result = numericConverter(333);

    const expected = {
      binary: '101001101',
      hexa: '14d',
      octal: '515',
    };

    expect(result).toEqual(expected);
  });

  test('should return an object with binary, hex and octal properties, and these values are 0', () => {
    const result = numericConverter(0);

    const expected = {
      binary: '0',
      hexa: '0',
      octal: '0',
    };

    expect(result).toEqual(expected);
  });
});