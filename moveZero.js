var moveZeroes = function (nums) {
    let x = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[x] = nums[i];
            x++;
        }
    }

    for (let i = x; i < nums.length; i++) {
        nums[i] = 0;
    }
};


/**
 * 
 * 
 * i/p [0,1,0,3,12]
 * o/p [1,3,12,0,0]
 * 
 * 
 * 
 * 
 * i/p [0]
 * o/p [0]
 */