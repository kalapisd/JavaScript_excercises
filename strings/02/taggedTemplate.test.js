import{ taggedTemplate } from './taggedTemplate.js';
import { describe, expect, test } from 'vitest';

const normalizeStr = (str) => str
  .replace(/\s+/g, '')
  .replace(/ {2,}/g, ' ')
  .replace(/> </g, '><')
  .trim();

describe('taggedTemplate() ', () => {
  test('should return an html template ', () => {
    const user = {
      firstName: 'James',
      lastName: 'Bond',
      age: '30',
      nationality: 'American',
    };

    const result = taggedTemplate`My name is ${user.firstName} ${user.lastName}, and I'm ${user.age} years old. I'm ${user.nationality}.`;

    const expected = `<em>My name is </em><strong>James</strong> <strong>Bond</strong>
                      <em>, and I'm </em> <strong>30</strong>
                      <em> years old. I'm </em><strong>American</strong>
                      <em>.</em>`;

    expect(normalizeStr(result)).toEqual(normalizeStr(expected));
  });
});