import { calcAreaSquare, calcAreaTriangle, calculateAreaCircle, calculateFactorial } from './simpleMaths'

test('Area Square', () => {
    expect(calcAreaSquare(4)).toBe(16);
})

test('Area Triangle', () => {
    expect(calcAreaTriangle(4, 5)).toBe(10);
})

test('Area Circle', () => {
    expect(calculateAreaCircle(3)).toBe(28);
})

test('Factorial', () => {
    expect(calculateFactorial(3)).toBe(6);
})