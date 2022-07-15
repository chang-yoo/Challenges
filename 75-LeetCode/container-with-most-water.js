// eslint-disable-next-line
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;
  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    maxArea = maxArea < area ? area : maxArea;
    height[left] < height[right] ? left++ : right--;
  }
  return maxArea;
};
