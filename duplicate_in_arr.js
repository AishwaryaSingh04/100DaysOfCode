var containsDuplicate = function (nums) {
    let obj = {};

    for (let i = 0; i < nums.length; i++) {
        if (obj.hasOwnProperty(nums[i])) {
            return true;
        } else {
            obj[nums[i]] = nums[i];
        }
    }
    return false;
};

/**
 *  let mySet=new Set(nums);
    if(mySet.size===nums.length){
        return false;
    }
    return true
 */