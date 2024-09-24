const { isKonamicode, checkforKonamicode } = require('./functions');

// Unit tests for isKonamicode function
var cases = [[0, false], [5, false], [10, true]];

describe('testing isKonamicode function', () => {
    it.each(cases)(
        'Progress value given, returns whether Konami code is triggered or not',
        (Arg, expectedResult) => {
            const result = isKonamicode(Arg);
            expect(result).toEqual(expectedResult);
        }
    )
});


// Unit tests for checkforKonamicode function
var cases = [["Q", 0, 0], ["ARROWUP", 0, 1], ["ARROWDOWN", 2, 3], ["ARROWDOWN", 7, 0], ["ARROWUP", 8, 1]];

describe('testing checkforKonamicode function', () => {
    it.each(cases)(
        'Key input and progress value given, returns updated progress value',
        (FirstArg, SecondArg, expectedResult) => {
            const result = checkforKonamicode(FirstArg, SecondArg);
            expect(result).toEqual(expectedResult);
        }
    )
});