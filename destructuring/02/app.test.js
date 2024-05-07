import { f, l, j } from './app.js';
import { describe, expect, test } from 'vitest';

describe('get f, l, j variables', () => {
  test('f should be John', () => {
    expect(f).toBe('John');
  });

  test('l should be Doe', () => {
    expect(l).toBe('Doe');
  });

  test('j should be unknown', () => {
    expect(j).toBe('unknown');
  });
});