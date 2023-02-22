// eslint-disable-next-line
const nums = [-1,0,1,2,-1,-4];
var threeSum = function (nums) {
// eslint-disable-next-line
  nums.sort((a,b) => a-b)
  const result = []
  for (let i = 0; i < nums.length; i++){
    if (i > 0 && nums[i] === nums[i-1]) continue; /// skipping duplicates 

    let left = i+1;
    let right = nums.length -1;
    while (left < right){
    const sum = nums[i] + nums[left] + nums[right]
    if (sum > 0){
      right--
    } else if (sum <0){
      left++
    } else {
      result.push([nums[i], nums[left], nums[right]])
      left++
    }
   }
};
console.log(result)
return result
}
  // nums.sort((a, b) => a - b);
  // const output = [];
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] === nums[i - 1]) continue;
  //   const target = 0 - nums[i];
  //   let right = nums.length - 1;
  //   let left = i + 1;
  //   while (left < right) {
  //     const sum = nums[right] + nums[left];
  //     if (sum > target) {
  //       right--;
  //     }
  //     if (sum < target) {
  //       left++;
  //     } else {
  //       output.push([nums[i], nums[left], nums[right]]);
  //       while (nums[left] === nums[left + 1]) left++;
  //       while (nums[right] === nums[right - 1]) right--;
  //       left++;
  //       right--;
  //     }
  //   }
  // }
  // return output;
threeSum(nums);