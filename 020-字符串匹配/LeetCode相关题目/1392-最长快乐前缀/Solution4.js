// 求lps， 即kmp算法中的next数组
/**
 * @param {string} s
 * @return {string}
 */
var longestPrefix = function (s) {
  let n = s.length
  let lps = Array(n).fill(0)

  for (let i = 1; i < n; i++) {
    let a = lps[i - 1]
    while (a > 0 && s[a] != s[i]) {
      a = lps[a - 1]
    }
    if (s[a] == s[i]) {
      lps[i] = a + 1
    }
  }

  return s.substring(0, lps[n - 1])
};