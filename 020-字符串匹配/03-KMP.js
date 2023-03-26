/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function (haystack, needle) {
  let m = haystack.length
  let n = needle.length

  if (m < n) return -1

  let lps = getLps(needle)

  let i = 0, j = 0
  while (i < m) {
    if (haystack[i] == needle[j]) {
      i++
      j++
      if (j == n) {
        return i - n
      }
    } else if (j > 0) {
      j = lps[j - 1]
    } else {
      i++
    }
  }
  return -1
}

var getLps = function (s) {
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

  return lps
}