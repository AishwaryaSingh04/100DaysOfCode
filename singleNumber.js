var singleNumber = function (nums) {

    let xor = 0;

    for (let i = 0; i < nums.length; i++) {
        xor = xor ^ nums[i];
    }
    return xor;
};

/**
 * 
 * 
 * i/p [2,2,1]
 * o/p 1
 * 
 * 
 */