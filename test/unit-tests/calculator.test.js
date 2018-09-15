import add from '../../src/calculator';

describe('Calculator functions', () => {
  describe('Add', () => {
    it('Should take two numbers and return the correct value', () => {
      expect(add(6, 4)).to.equal(10);
    });
  });

  describe('Division', () => {
    it('Should take two numbers and return the correct value');
  });

  describe('Multiplication', () => {
    it('Should take two numbers and return the correct value');
  });

  describe('Subtraction', () => {
    it('Should take two numbers and return the correct value');
  });
});
