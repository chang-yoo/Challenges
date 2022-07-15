// eslint-disable-next-line
var maxProduct = function (nums) {
  let max = nums[0];
  const minValue = [nums[0]];
  const maxValue = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    const current = nums[i];
    minValue[i] = Math.min(current, current * minValue[i - 1], current * maxValue[i - 1]);
    maxValue[i] = Math.max(current, current * minValue[i - 1], current * maxValue[i - 1]);
    max = maxValue[i] > max ? maxValue[i] : max;
  }
  return max;
};
