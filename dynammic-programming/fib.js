// fib(n): 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
// eslint-disable-next-line
const fib = n => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
  // fib number is sum of previous two numbers
};
