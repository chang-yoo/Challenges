/* eslint-disable no-unused-vars */
var productExceptSelf = function (nums) {
  const pre = []
  for (let i = 0 ; i < nums.length; i++){
    if (nums[i-1] === undefined){      
      pre[i] = nums[i]
    } else {
      pre[i] = pre[i-1]*nums[i]
    }
  }
  let post = 1;
  for (let i = nums.length-1 ; i >= 0; i--){
    if (nums[i+1] === undefined){
      pre[i] = pre[i-1]
      post = nums[i]
    } else {
      pre[i] = (pre[i-1] === undefined ? 1 : pre[i-1]) * post
      post = post*nums[i]
    }
  }
  return pre
  }
  // const left = Array(nums.length).fill(0);
  // left[0] = 1;
  // const right = Array(nums.length).fill(0);
  // right[right.length - 1] = 1;
  // for (let i = 1; i < left.length; i++) {
  //   left[i] = nums[i - 1] * left[i - 1];
  // }
  // for (let i = right.length - 2; i >= 0; i--) {
  //   right[i] = nums[i + 1] * right[i + 1];
  // }
  // for (let i = 0; i < nums.length; i++) {
  //   for (let i = 0; i < nums.length; i++) {
  //     nums[i] = right[i] * left[i];
  //   }
  // }
  // return nums;
productExceptSelf([-1,1,0,-3,3])