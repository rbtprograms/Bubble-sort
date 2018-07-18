const assert = require('assert');
const bubbleSorter = require('../lib/bubble');

describe('bubble sorting algorithm', () => {

    it('can put an array of two in order', () => {
        const small = [9, 1];
        const smallSorted = bubbleSorter(small);
        assert.deepEqual(smallSorted, [1, 9]);
    });

});