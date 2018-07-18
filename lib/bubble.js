function bubbleSorter(arr) {
    for(let i = 0; i < arr.length; i++){
        let left = arr[i];
        let right = arr[i + 1];
        if(i === -1){
            i = 0;
        }
        if(arr[i] > arr[i + 1]){
            arr[i] = right;
            arr[i + 1] = left;
        }
        if(arr[i] < arr[i + 1]){
            continue;
        }
    }
    return arr;
}

module.exports = bubbleSorter;