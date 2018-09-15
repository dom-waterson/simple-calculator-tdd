import {
  add, divide, multiply, subtract,
} from '../../src/calculator';

describe('Calculator functions', () => {
  describe('Add', () => {
    it('Should take two numbers and return the correct value', () => {
      expect(add(6, 4)).to.equal(10);
    });
  });

  describe('Division', () => {
    it('Should take two numbers and return the correct value', () => {
      expect(divide(10, 2)).to.equal(5);
    });
  });

  describe('Multiplication', () => {
    it('Should take two numbers and return the correct value', () => {
      expect(multiply(10, 5)).to.equal(50);
    });
  });

  describe('Subtraction', () => {
    it('Should take two numbers and return the correct value', () => {
      expect(subtract(10, 5)).to.equal(5);
    });
  });
});
