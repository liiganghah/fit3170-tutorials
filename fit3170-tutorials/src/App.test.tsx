import { describe, it, expect } from 'vitest';
import { multiply, subtract } from './App';

describe('multiply', () => {
  it('multiplies two positive numbers', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  it('multiplies by zero', () => {
    expect(multiply(5, 0)).toBe(0);
  });

  it('multiplies two negative numbers', () => {
    expect(multiply(-2, -3)).toBe(6);
  });

  it('multiplies a positive and a negative number', () => {
    expect(multiply(4, -2)).toBe(-8);
  });
});

describe('subtract', () => {
  it('subtracts two positive numbers', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  it('subtracts a larger number from a smaller one', () => {
    expect(subtract(3, 7)).toBe(-4);
  });

  it('subtracts zero', () => {
    expect(subtract(5, 0)).toBe(5);
  });

  it('subtracts two negative numbers', () => {
    expect(subtract(-3, -1)).toBe(-2);
  });
});
