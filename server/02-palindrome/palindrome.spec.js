const isPalindrome = require('./palindrome.js');

describe.only('the palindrome canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

describe.only('palindrome tests', () => {
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
  it.todo('error for empty string')
  it.todo('error for not a string')
})