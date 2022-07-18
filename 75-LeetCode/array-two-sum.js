/* eslint-disable no-unused-vars */
const twoSum = function (nums, target) {
  const output = {};
  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    const pair = target - value;
    if (output[pair] !== undefined) {
      return [output[pair], i];
    } else {
      output[value] = i;
    }
  }
};
