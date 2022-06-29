/* eslint-disable no-unused-vars */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let mostProfit = 0;
  let profit = 0;
  let minimum = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minimum) {
      minimum = prices[i];
      continue;
    }
    profit = prices[i] - minimum;
    if (profit > mostProfit) {
      mostProfit = profit;
    }
  }
  return mostProfit;
};
