// eslint-disable-next-line
var maxSubArray = function (nums) {
  if (nums.length === 1) return nums[0];
  let accNum = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const calc = Math.max(nums[i], accNum + nums[i]);
    if (calc > max) max = calc;
    accNum = calc;
  }
  return max;
};
