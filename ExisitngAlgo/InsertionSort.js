let arr = [5, 7, 1, 9, 2, 4, 6];

function InsertionSort() {


    for (let i = 1; i < arr.length; i++) {
        let curr = arr[i];
        let prev = i - 1;
        while (prev >= 0 && arr[prev] > curr) {
            arr[prev + 1] = arr[prev];
            prev--
        }
        arr[prev + 1] = curr;
        console.log(arr)
    }
    return arr;
}

InsertionSort();