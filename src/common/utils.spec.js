import { stringToTitleCase } from './utils'

describe('utils', () => {
  describe('stringToTitleCase', () => {
    it('converts a lowercase to Title case', () => {
      expect(stringToTitleCase('hello world')).toBe('Hello World')
    });

    it('converts a uppercase to Title case', () => {
      expect(stringToTitleCase('HELLO WORLD')).toBe('Hello World')
    });

    it('converts a mixed case to Title Case', () => {
      expect(stringToTitleCase('hElLo WoRld')).toBe('Hello World')
    });

    it('throws an error if the input is not a string', () => {
      expect(() => { stringToTitleCase(123); }).toThrow();
    })
  });
});