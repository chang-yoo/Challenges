// eslint-disable-next-line
var maxProduct = function (nums) {
  let max = nums[0];
  const maxIndex = [nums[0]];
  const minIndex = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    maxIndex[i] = Math.max(num, num * maxIndex[i - 1], num * minIndex[i - 1]);
    minIndex[i] = Math.min(num, num * maxIndex[i - 1], num * minIndex[i - 1]);
    max = Math.max(max, maxIndex[i]);
  }
  return max;
};
