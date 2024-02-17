// find a number of fibonacci
let n = 2;

// example:: 1
function fib(n) {
  let fibSeries = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibSeries.push(
      fibSeries[fibSeries.length - 1] + fibSeries[fibSeries.length - 2]
    );
  }
  return fibSeries[n];
}

// example::2  ------------------------------  simple way to find out
function fab(n) {
  let temp = [0, 1];
  let f = 1;

  if (n < 2) return (f = n);

  for (let i = 1; i < n; i++) {
    if (temp.length === n) {
      temp.push(temp[temp.length - 1] + temp[temp.length - 2]);
      f = temp[temp.length - 1];
      return f;
    }
    temp.push(temp[temp.length - 1] + temp[temp.length - 2]);
    f = temp[temp.length - 1];
  }
}

console.log(fib(n));
