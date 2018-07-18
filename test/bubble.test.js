const assert = require('assert');
const bubbleSorter = require('../lib/bubble');

describe('bubble sorting algorithm', () => {

    it('returns 0 when given an empty array', () => {
        const empty = [];
        const emptySorted = bubbleSorter(empty);
        assert.equal(emptySorted, 0);
    });
    
    it('can put an array of two in order', () => {
        const small = [9, 1];
        const smallSorted = bubbleSorter(small);
        assert.deepEqual(smallSorted, [1, 9]);
    });
    
    it('can put an array of 5 in order', () => {
        const medium = [8, 4, 15, 1, 3];
        const mediumSorted = bubbleSorter(medium);
        assert.deepEqual(mediumSorted, [1, 3, 4, 8, 15]);
    });
    
    it('can put an array of 20 in order', () => {
        const large = [5, 9, 20, 19, 1, 3, 4, 18, 17, 6, 8, 7, 2, 11, 13, 10, 12, 14, 15, 16];
        const largeSorted = bubbleSorter(large);
        console.log(largeSorted);
        assert.deepEqual(largeSorted, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
    });

});