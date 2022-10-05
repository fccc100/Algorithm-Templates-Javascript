// 求x, y的最大公约数
// 欧几里得算法
// 递归写法
function gcd(x, y) {
  if (y == 0) return x;

  return gcd(y, x % y);
}

// 迭代写法
function gcd(x, y) {
  while (y) {
    let t = y;
    y = x % y;
    x = t;
  }
  return x;
}