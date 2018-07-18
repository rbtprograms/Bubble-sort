function bubbleSorter(arr) {
    let i = 0;
    while(i < arr.length - 1){
        let left = arr[i];
        let right = arr[i + 1];
        if(i < 0) i = 0;
        if(left === right) i++;
        if(arr[i] > arr[i + 1]){
            arr[i] = right;
            arr[i + 1] = left;
            i--;
        }
        if(left < right) i++;
    }
}

module.exports = bubbleSorter;