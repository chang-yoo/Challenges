/* eslint-disable no-unused-vars */

var maxProfit = function(){
  const prices = [7, 1, 5, 3, 6, 4]
  let min = prices[0];
  let max = 0;
  for (let i = 0 ; i < prices.length; i++){
    min = min > prices[i] ? prices[i] : min
    const profit = prices[i]-min
    max = max <= profit ? profit : max
  }
  return max;
}
maxProfit()