/* eslint-disable no-unused-vars */
const nums = [1,2,3,6,11]
const target = 5

const twoSum = function (nums, target) {
  nums = nums.sort();
  let lastIdx = nums.length -1;
  let idx = 0;
  while (nums[idx]+nums[lastIdx] != target){
    if (nums[idx]+nums[lastIdx] > target){
      lastIdx--
    } else {
      idx++
    }
  } 
  return [idx, lastIdx]  
};
twoSum(nums, target)