const Stack = require('./stack');

describe('the stack canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

describe.only('a stack', () => {
  it('starts empty', () => {
    expect((new Stack).size()).toBe(0);
  });
  it('starts with stack size of 0', () => {
    expect((new Stack()).size()).toBe(0);
  });
  it('is not empty when pushed', () => {
    let testStack = new Stack();
    testStack.push('elem');
    expect(testStack.size()).toBe(1);
  });
  it('stack is empty when pushed and popped', () => {
    let testStack = new Stack();
    testStack.push('elem');
    expect(testStack.pop().size()).toBe(0);
  });
  it.todo('stack size is 0 when pushed and popped');
  it.todo('throws overflow error when pushing to a stack at full capacity');
  it.todo('throw underflow error when popping an empty stack');
  it.todo('pops the same one item when pushed');
  it.todo('pops two items with the most recent first');
  it.todo('accepts only a positive capacity');
});