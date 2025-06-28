var findTheDifference = function (s, t) {
    let str1 = s + t;
    let str2 = str1.split("");

    let xor = 0;

    for (let i = 0; i < str2.length; i++) {
        xor = xor ^ str2[i].charCodeAt(0);
    }
    return String.fromCharCode(xor);
};