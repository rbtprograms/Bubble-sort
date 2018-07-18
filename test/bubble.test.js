const assert = require('assert');
const bubbleSorter = require('../lib/bubble');

describe('bubble sorting algorithm', () => {
    
    it('can put an array of two in order', () => {
        const small = [9, 1];
        bubbleSorter(small);
        assert.deepEqual(small, [1, 9]);
    });
    
    it('can put an array of 5 in order', () => {
        const medium = [8, 4, 15, 1, 3];
        bubbleSorter(medium);
        assert.deepEqual(medium, [1, 3, 4, 8, 15]);
    });
    
    it('can put an array of 20 in order', () => {
        const large = [5, 9, 20, 19, 1, 3, 4, 18, 17, 6, 8, 7, 2, 11, 13, 10, 12, 14, 15, 16];
        bubbleSorter(large);
        assert.deepEqual(large[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
    });
    
    it('will not break if numbers are even', () => {
        const same = [4, 2, 9, 1, 2, 5, 2];
        bubbleSorter(same);
        assert.deepEqual(same, [1, 2, 2, 2, 4, 5, 9]);
    });
    
    it('leaves array alone when it needs no sorting', () => {
        const none = [1, 2, 3, 4, 5, 6];
        bubbleSorter(none);
        assert.deepEqual(none, [1, 2, 3, 4, 5, 6]);
    });
    
    it('can sort arrays with large, random numbers', () => {
        const random = [927, 88837, 23, 9090, 91837, 222, 4567, 111111];
        bubbleSorter(random);
        assert.deepEqual(random, [23, 222, 927, 4567, 9090, 88837, 91837, 111111]);
    });
    
    it('works with negative numbers', () => {
        const negative = [3, 6, -4, 12, 1, -8, -20];
        bubbleSorter(negative);
        assert.deepEqual(negative, [-20, -8, -4, 1, 3, 6, 12]);
    });

    it('works with lowercase letters', () => {
        const letters = ['m', 'j', 'x', 'b'];
        bubbleSorter(letters);
        assert.deepEqual(letters, ['b', 'j', 'm', 'x']);
    });

    it('works with lowercase words', () => {
        const words = ['james', 'hello', 'zebra', 'another', 'banquet'];
        bubbleSorter(words);
        assert.deepEqual(words, ['another', 'banquet', 'hello', 'james', 'zebra']);
    });

});