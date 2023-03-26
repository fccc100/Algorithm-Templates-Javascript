/**
 * @param {string} s
 * @return {string}
 */
var longestPrefix = function (s) {
  let n = s.length
  for (let i = s.length - 1; i >= 1; i--) {
    if (equal(s, 0, i - 1, s.length - i, s.length - 1)) {
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
