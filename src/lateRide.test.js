const solution = require('./lateRide.js');

test('test 1', () => {
    expect(solution(240)).toBe(4);
});

test('test 2', () => {
    expect(solution(808)).toBe(14);
});

test('test 3', () => {
    expect(solution(1439)).toBe(19);
});

test('test 4', () => {
    expect(solution(0)).toBe(0);
});

test('test 5', () => {
    expect(solution(23)).toBe(5);
});

test('test 6', () => {
    expect(solution(8)).toBe(8);
});
