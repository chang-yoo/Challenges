/* eslint-disable no-unused-vars */
var nums = [1,2,3,1]
var containsDuplicate = function (nums) {
  nums = nums.sort();
  for (var i = 0; i < nums.length; i++){
    if (i+1 < nums.length-1 && nums[i] === nums[i+1]){
      return true
    }
  }
  return false;
};
console.log(containsDuplicate(nums))