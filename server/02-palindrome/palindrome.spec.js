describe.only('the palindrome canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

describe.only('palindrome tests', () => {
  it.todo('true for mom')
  it.todo('false for dude')
  it.todo('true for mom mom')
  it.todo('true for whitespace')
  it.todo('error for empty string')
  it.todo('error for not a string')
})