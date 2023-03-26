// 预处理哈希值
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

  let prehash = Array(n)
  prehash[0] = s[0].charCodeAt() - 'a'.charCodeAt()
  for (let i = 1; i < n; i++) {
    prehash[i] = ((prehash[i - 1] * 26) % MOD + s[i].charCodeAt() - 'a'.charCodeAt()) % MOD
  }
  let sufhash = Array(n)
  sufhash[n - 1] = s[n - 1].charCodeAt() - 'a'.charCodeAt()
  for (let i = n - 2; i >= 0; i--) {
    sufhash[i] = (((s[i].charCodeAt() - 'a'.charCodeAt()) * pow26[n - i - 1]) % MOD + sufhash[i + 1]) % MOD
  }

  for (let i = s.length - 1; i >= 1; i--) {
    lhash = prehash[i - 1]
    rhash = sufhash[n - i]
    if (lhash == rhash && equal(s, 0, i - 1, n - i, n - 1)) {
      return s.substring(0, i)
    }
  }
  return ''
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
