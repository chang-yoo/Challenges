// eslint-disable-next-line
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  while (left < right) {
    const area = Math.min(height[right], height[left]) * (right - left);
    max = max > area ? max : area;
    height[left] < height[right] ? left++ : right--;
  }
  return max;
};
