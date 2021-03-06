/* eslint-disable no-unused-vars */
var productExceptSelf = function (nums) {
  const left = Array(nums.length).fill(0);
  left[0] = 1;
  const right = Array(nums.length).fill(0);
  right[right.length - 1] = 1;
  for (let i = 1; i < left.length; i++) {
    left[i] = nums[i - 1] * left[i - 1];
  }
  for (let i = right.length - 2; i >= 0; i--) {
    right[i] = nums[i + 1] * right[i + 1];
  }
  for (let i = 0; i < nums.length; i++) {
    for (let i = 0; i < nums.length; i++) {
      nums[i] = right[i] * left[i];
    }
  }
  return nums;
};
