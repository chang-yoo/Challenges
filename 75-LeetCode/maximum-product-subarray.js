// eslint-disable-next-line
const nums = [-1,0,1,2,-1,-4];

var maxProduct = function (nums) {
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
maxProduct(nums);