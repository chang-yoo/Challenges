/*
Say that you ar a traveler on a 2D grid. You begin in the top-left corner andy our goal is
to travel to the bottom-right corner. You may only move down or right.

In how many ways can you travel to the goal on a grid with dimensions m * n?

Write a function gridTraveler(m,n that calculates this)
*/

// try to shrink the playable area ex: 3x3 then move once, it beceoms 2x3 or 3x2

// eslint-disable-next-line
const gridTraveler = (m, n) => {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
};

// eslint-disable-next-line
const memoizationWithGridTraveler = (m,n, memo={}) => {
  const key = m + ',' + n;
  if (key in memo) return memo[key];

  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  memo[key] = memoizationWithGridTraveler(m - 1, n, memo) + memoizationWithGridTraveler(m, n - 1, memo);
  return memo[key];
};
