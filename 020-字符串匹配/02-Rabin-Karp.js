/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let m = haystack.length
  let n = needle.length
  if (n > m) return -1
  const MOD = 1e9 + 7

  let pow = 1
  for (let i = 0; i < n - 1; i++) {
    pow = (pow * 256) % MOD
  }

  let thash = 0
  for (let i = 0; i < n; i++) {
    thash = ((thash * 256) % MOD + needle[i].charCodeAt()) % MOD
  }

  let shash = 0
  for (let i = 0; i < n - 1; i++) {
    shash = ((shash * 256) % MOD + haystack[i].charCodeAt()) % MOD
  }

  for (let i = n - 1; i < m; i++) {
    shash = ((shash * 256) % MOD + haystack[i].charCodeAt()) % MOD
    if (shash == thash && equal(haystack, needle, i)) {
      return i - needle.length + 1
    }

    let code = haystack[i - needle.length + 1].charCodeAt()
    shash = (shash - ((code * pow) % MOD) + MOD) % MOD
  }
  return -1
};

function equal(s, t, idx) {
  let j = t.length - 1
  while (t >= 0) {
    if (s[idx] != t[j]) {
      return false
    }
    j--
    idx--
  }
  return true
}