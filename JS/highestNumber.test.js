const highestNumber = require('./highestNumber.js');

test('Find the highest number', () => {
    expect(highestNumber()).toEqual(143);
});