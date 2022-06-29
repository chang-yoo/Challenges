/* eslint-disable no-unused-vars */
function twoSum(nums, target) {
  const twoSum = function (nums, target) {
    const index = [0, 0];
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] !== target) {
          continue;
        }
        if (nums[i] + nums[j] === target) {
          index[0] = i;
          index[1] = j;
        }
      }
    }
    return index;
  };
}
