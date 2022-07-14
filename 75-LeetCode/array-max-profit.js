/* eslint-disable no-unused-vars */
var maxProfit = function (prices) {
  let min = prices[0];
  let profit = 0;
  let mostProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    min = prices[i] < min ? prices[i] : min;
    profit = prices[i] - min;
    mostProfit = profit >= mostProfit ? profit : mostProfit;
  }
  return mostProfit;
};
