// eslint-disable-next-line
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const output = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue;
    const target = 0 - nums[i];
    let right = nums.length - 1;
    let left = i + 1;
    while (left < right) {
      const sum = nums[right] + nums[left];
      if (sum > target) {
        right--;
      }
      if (sum < target) {
        left++;
      } else {
        output.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      }
    }
  }
  return output;
};
