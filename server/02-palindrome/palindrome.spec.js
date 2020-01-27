const isPalindrome = require('./palindrome.js');

describe('the palindrome canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

describe('palindrome tests', () => {
  it('true for mom', () => {
    expect(isPalindrome('mom')).toBe(true);
  });
  it('false for dude', () => {
    expect(isPalindrome('dude')).toBe(false);
  });
  it('true for mom dad', () => {
    expect(isPalindrome('mom dad')).toBe(false);
  });
  it('false for whitespace', () => {
    expect(isPalindrome(' ')).toBe(false);
  })
  it('error for empty string', () => {
    expect(() => {
      isPalindrome('')
    }).toThrow('empty strings are not palindromes')
  })
  it('error for not a string', () => {
    expect(() => {
      isPalindrome(5)
    }).toThrow('input must be a string')
  });
});