const bubbleSorter = require('../lib/bubble');
const Stopwatch = require('node-stopwatch').Stopwatch;
const utils = require('./utils');

describe('bubble sorting performance tests', () => {

    it('testing the performance of 1,000 original bubble sort: ', () => {
        const bigNum = 1000;
        const randNums = utils.createBigArray(bigNum);

        var stopwatch = Stopwatch.create();
        stopwatch.start();
        bubbleSorter(randNums);
        stopwatch.stop();

        console.log('Sorting took ' + stopwatch.elapsedMilliseconds + 'ms');
    });

    it('testing the performance of 10,000 original bubble sort: ', () => {
        const bigNum = 10000;
        const randNums = utils.createBigArray(bigNum);

        var stopwatch = Stopwatch.create();
        stopwatch.start();
        bubbleSorter(randNums);
        stopwatch.stop();

        console.log('Sorting took ' + stopwatch.elapsedMilliseconds + 'ms');
    });

    it('testing the performance of 100,000 original bubble sort: ', () => {
        const bigNum = 100000;
        const randNums = utils.createBigArray(bigNum);

        var stopwatch = Stopwatch.create();
        stopwatch.start();
        bubbleSorter(randNums);
        stopwatch.stop();

        console.log('Sorting took ' + stopwatch.elapsedMilliseconds + 'ms');
    });
});