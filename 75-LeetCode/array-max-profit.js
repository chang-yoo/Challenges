/* eslint-disable no-unused-vars */
var maxProfit = function (prices) {
  let minimum = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    minimum = minimum > prices[i] ? prices[i] : minimum;
    const profit = prices[i] - minimum;
    maxProfit = maxProfit <= profit ? profit : maxProfit;
  }
  return maxProfit;
};
