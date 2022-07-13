// fib(n): 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
// eslint-disable-next-line
const fib = n => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
  // fib number is sum of previous two numbers
};
// eslint-disable-next-line
const foo = n => {
  if (n <= 1) return;
  foo(n - 1);
};
// this shows time complexity of O(n) time
// eslint-disable-next-line
const bar = n => {
  if (n <= 1) return;
  bar(n - 2);
};
// this shows time complexity of O(n/2) time

// eslint-disable-next-line
const dib = n => {
  if (n <= 1) return;
  dib(n - 1);
  dib(n - 1);
};
