/**
 * @param {string} text
 * @return {number}
 */
 var longestDecomposition = function (text) {
  let n = text.length
  const MOD = 1e9 + 7
  let pow26 = Array(n + 1)
  pow26[0] = 1
  for (let i = 1; i <= n; i++) {
    pow26[i] = (pow26[i - 1] * 26) % MOD
  }

  function __longestDecomposition(text, l, r) {
    if (l > r) return 0
    if (l == r) return 1

    let lhash = 0
    let rhash = 0
    let tl = l
    let tr = r
    while (tl < tr) {
      lhash = ((lhash * 26) % MOD + (text[tl].charCodeAt() - 'a'.charCodeAt())) % MOD
      rhash = (((text[tr].charCodeAt() - 'a'.charCodeAt()) * pow26[r - tr]) % MOD + rhash) % MOD
    
      if (lhash == rhash) {
        return 2 + __longestDecomposition(text, tl + 1, tr - 1)
      }
      tl++
      tr--
    }
    return 1
  }

  return __longestDecomposition(text, 0, n - 1)
};