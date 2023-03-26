/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let m = haystack.length
  let n = needle.length
  if (n > m) return -1;

  for (let i = 0; i < m; i++) {

    let j
    for (j = 0; j < n; j++) {
      if (haystack[i + j] != needle[j]) {
        break;
      }
    }
    if (j == n) return i
  }
  return -1
}