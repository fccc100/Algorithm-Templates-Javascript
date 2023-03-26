/**
 * @param {string} s
 * @return {string}
 */
 var longestPrefix = function (s) {
  let n = s.length
  const MOD = 1e9 + 7
  let pow26 = Array(n)
  pow26[0] = 1
  for (let i = 1; i < n; i++) {
    pow26[i] = (pow26[i - 1] * 26) % MOD
  }
  let lhash = 0
  let rhash = 0
  let res = ''
  for (let i = 0, j = n - 1; i < s.length - 1; i++,j--) {
    lhash = ((lhash * 26) % MOD + s[i].charCodeAt() - 'a'.charCodeAt()) % MOD
    rhash = (((s[j].charCodeAt() - 'a'.charCodeAt()) * pow26[n - j - 1]) % MOD + rhash) % MOD
    if (lhash == rhash && equal(s, 0, i, j, n - 1)) {
      res = s.substring(0, i + 1)
    }
  }
  return res
};

function equal(s, l1, r1, l2, r2) {
  if (r1 - l1 != r2 - l2) return false
  let i = l1, j = l2
  while (i <= r1) {
    if (s[i] != s[j]) return false
    i++
    j++
  }
  return true
}
