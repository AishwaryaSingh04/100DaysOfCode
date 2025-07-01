/**
 * 
 * 
 * 
 */

let arr = [5, 4, 3, 2, 1]

function findMax(n) {
    if (n === 0) {
        return arr[0]
    }

    return Math.max(arr[n], findMax(n - 1));
}

console.log(findMax(arr.length - 1))

