const slovaE = require('./recenica.js');

test('Broj slova e', () => {
    expect(slovaE()).toEqual(3);
});