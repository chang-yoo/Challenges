// eslint-disable-next-line
var maxSubArray = function (nums) {
  if (nums.length === 1) {
    return [nums[0]];
  }
  let max = nums[0];
  let acc = nums[0];

  for (let i = 0; i < nums.length; i++){
    let calc = Math.max(nums[i], nums[i]+acc)
    max = max <= calc ? calc : max;
    acc = calc
  }
  return max;
  // if (nums.length === 1) return nums[0];
  // let max = nums[0];
  // let acc = nums[0];
  // for (let i = 1; i < nums.length; i++) {
  //   const calc = Math.max(nums[i], nums[i] + acc);
  //   max = max <= calc ? calc : max;
  //   acc = calc;
  // }
  // return max;
};
maxSubArray([-2,1,-3,4,-1,2,1,-5,4])