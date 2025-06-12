/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    //-ve number can never be palindrom because there is minus sign and then cant be present and back of the number
    if (x < 0) {
        return false;
    }

    let orignalNumber = x;
    let reversedNumber = 0;


    while (x > 0) {
        let remainder = x % 10;
        reversedNumber = reversedNumber * 10 + remainder;
        x = Math.floor(x / 10);
    }

    if (orignalNumber === reversedNumber) {
        return true
    } else {
        return false
    }
};