// eslint-disable-next-line
const nums = [-1,0,1,2,-1,-4];

var maxProduct = function(nums) {
  let min = nums[0]
  let max = nums[0]
  let global = nums[0]
  if (nums.legnth ===1) return nums[0]

  for (let i = 1; i < nums.length; i++){
      max = Math.max(max*nums[i], min*nums[i], nums[i])
      min = Math.min(max*nums[i], min*nums[i], nums[i])
      global = Math.max(global, max)
  }
  return global
};

maxProduct(nums);