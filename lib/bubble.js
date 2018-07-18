function bubbleSorter(arr) {
    if(arr.length === 0) return 0;
    let i = 0;
    while(i < arr.length - 1){
        let left = arr[i];
        let right = arr[i + 1];
        if(i < 0) i = 0;
        if(arr[i] === arr[i + 1]) i++;
        if(arr[i] > arr[i + 1]){
            arr[i] = right;
            arr[i + 1] = left;
            i--;
        }
        if(arr[i] < arr[i + 1]) i++;
        // console.log(arr, arr[i], arr[i + 1]);
    }
    return arr;
}

module.exports = bubbleSorter;