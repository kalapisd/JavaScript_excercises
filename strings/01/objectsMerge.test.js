import{ objectsMerge } from './objectsMerge.js';
import { describe, expect, test } from 'vitest';

describe('objectsMerge() ', () => {
  test('should return a concated object, and keys are integer values starts with 0', () => {
    const john = {
      firstName: 'Jonh',
      lastName: 'Doe',
    };

    const jane = {
      firstName: 'Jane',
      lastName: 'Doe',
    };

    const result = objectsMerge(john, jane);
    const expected = {
      0: {
        firstName: 'Jonh',
        lastName: 'Doe',
      },
      1: {
        firstName: 'Jane',
        lastName: 'Doe',
      },
    };

    expect(result).toEqual(expected);
  });

  test('should return a concated object, and keys are integer values starts with 0, it can contains empty object', () => {
    const john = {
      firstName: 'Jonh',
    };

    const jane = {};

    const result = objectsMerge(john, jane);
    const expected = {
      0: {
        firstName: 'Jonh',
      },
      1: {},
    };

    expect(result).toEqual(expected);
  });
});