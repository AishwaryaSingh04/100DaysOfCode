var missingNumber = function (nums) {
    let n = nums.length;
    let totalSum = n * (n + 1) / 2;
    let actualSum = 0;

    for (let i = 0; i < nums.length; i++) {
        actualSum = actualSum + nums[i];
    }

    return totalSum - actualSum;
};