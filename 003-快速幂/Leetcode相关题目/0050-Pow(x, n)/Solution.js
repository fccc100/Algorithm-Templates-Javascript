var myPow = function (x, n) {
  return n >= 0 ? quickPow(x, n) : 1 / quickPow(x, -n);
};

function quickPow(x, n) {
  if (n == 0) {
    return 1;
  }

  let y = quickPow(x, Math.floor(n / 2));
  return n % 2 == 0 ? y * y : y * y * x;
}