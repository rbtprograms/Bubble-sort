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
        console.log(mediumSorted);
        assert.deepEqual(mediumSorted, [1, 3, 4, 8, 15]);
    });

});