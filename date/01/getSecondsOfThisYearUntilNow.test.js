import {describe, test, expect, vi} from 'vitest';

import {getSecondsOfThisYearUntilNow} from './getSecondsOfThisYearUntilNow.js';

describe('getSecondsOfThisYearUntilNow() ', () => {
  test('should return seconds of this year until now', () => {
    const from = new Date(2021, 0, 1);
    const now = new Date(2021, 0, 1);
    global.Date = vi.fn(() => from);
    global.Date.now = vi.fn(() => now);
    global.Date.prototype.getFullYear = vi.fn(() => 2021);

    expect(getSecondsOfThisYearUntilNow()).toBe(0);
  });
});