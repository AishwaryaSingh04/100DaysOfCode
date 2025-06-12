let num1 = 456;
let num2 = -576;

function countNumberOfDigit(num) {

    if (num === 0) {
        return 1;
    }
    let count = 0;
    num = Math.abs(num);
    while (num > 0) {
        num = Math.floor(num / 10);
        count++;
    }
    return count;
}

console.log(countNumberOfDigit(num1));
console.log(countNumberOfDigit(num2));