/**
 * [5,7,8,9,2,4]
 * 
 * 
 */

let arr = [5, 7, 8, 9, 2, 4, 6];

function sumOdd(n) {

    if (n < 0) {
        return 0;
    }

    let isOdd = n % 2 === 0 ? false : true;

    return (isOdd ? arr[n] : 0) + sumOdd(n - 1)
}

console.log(sumOdd(arr.length - 1))