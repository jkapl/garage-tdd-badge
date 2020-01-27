// eslint-disable-next-line no-unused-vars
const { fahrenheitToCelcius } = require('./fahrenheit-2-celcius');

describe('the fahrenheit-2-celcius canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

describe.only('a fahrenheitToCelcius function should', () => {
  it('return 0 for 32', () => {
    console.log(fahrenheitToCelcius(32).should);
    expect(fahrenheitToCelcius(32)).toBe(0);
  });
  it('return 10 for 50');
  it('return 100 for 212');
  it('return -40 for -40');
  it('return -273.15 for -459.67');
});