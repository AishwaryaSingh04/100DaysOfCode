var findDuplicate = function(nums) {
    let obj = {};

    let i = 0;

    while(i<nums.length){
        if(obj.hasOwnProperty(nums[i])){
            return nums[i];
        }
        obj[nums[i]]=nums[i];
        i++;
    }
    return false;

};