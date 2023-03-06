// 判断是否存在欧拉回路：
// 所有点的度数都是偶数 <=> 存在欧拉回路
function hasEulerLoop(edges, n) {
  let degrees = Array(n).fill(0)
  for (let i = 0; i < edges.length; i++) {
    degrees[edges[i][0]]++
    degrees[edges[i][1]]++
  }
  for (let i = 0; i < n; i++) {
    if (degrees[i] % 2 == 1) return false
  }
  return true
}