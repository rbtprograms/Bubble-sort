function getRandomInt() {
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function createBigArray(bigNum) {
    const randNums = [];
    for(let i = 0; i < bigNum; i++)
    {
        randNums.push(getRandomInt());
    }

    return randNums;
}

module.exports = {
    createBigArray
};