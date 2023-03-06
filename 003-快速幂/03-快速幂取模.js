// 求 x 的 n 次幂对 mod 取模
function quickPowMod(x, n, mod) {
  x = BigInt(x)
  n = BigInt(n)
  let res = 1n
  while (n > 0) {
    if (n & 1n) {
      res = (res * x) % mod
    }
    n = n >> 1n
    x = (x * x) % mod
  }
  return res
}