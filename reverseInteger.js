/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let orignalNumber = x;

    let reversedNumber = 0;
    x = Math.abs(x);
    while (x > 0) {
        let remainder = x % 10;
        reversedNumber = reversedNumber * 10 + remainder;
        x = Math.floor(x / 10);
    }

    let limit = Math.pow(2, 31);
    reversedNumber = orignalNumber < 0 ? -reversedNumber : reversedNumber;

    if (reversedNumber < -limit || reversedNumber > limit) {
        return 0;
    }

    return reversedNumber;
};


//key point was to be careful of the negative number and the limit calculation