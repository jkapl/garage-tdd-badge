// eslint-disable-next-line no-unused-vars
const { fahrenheitToCelcius } = require('./fahrenheit-2-celcius');

describe('the fahrenheit-2-celcius canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

describe('a fahrenheitToCelcius function should', () => {
  it('return 0 for 32', () => {
    expect(fahrenheitToCelcius(32)).toBe(0);
  });
  it('return 10 for 50', () => {
    expect(fahrenheitToCelcius(50)).toBe(10);
  });
  it('return 100 for 212', () => {
    expect(fahrenheitToCelcius(212)).toBe(100);
  });
  it('return -40 for -40', () => {
    expect(fahrenheitToCelcius(-40)).toBe(-40);
  });
  it('return -273.15 for -459.67', () => {
    expect(fahrenheitToCelcius(-459.67)).toBe(-273.15);
  });
});