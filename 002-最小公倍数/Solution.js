// 求x, y的最小公倍数，可以先求x, y的最大公约数，再求公倍数
function lcm(x, y) {
  return (x * y) / gcd(x, y);
}

function gcd(x, y) {
  if (y == 0) return x;

  return gcd(y, x % y);
}