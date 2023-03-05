// 求联通分量
// visited数组用整数表示，不同的值表示不同的联通分量
function cccount(edges, n) {
  let graph = Array(n)
  for (let i = 0; i < n; i++) {
    graph[i] = new Set()
  }

  for (let i = 0; i < edges.length; i++) {
    let v1 = edges[i][0]
    let v2 = edges[i][1]
    graph[v1].add(v2)
    graph[v2].add(v1)
  }

  let visited = Array(n).fill(-1)
  let cnt = 0

  function dfs(v, ccid) {
    visited[v] = ccid
    for (let w of graph[v]) {
      if (visited[w] == -1) {
        dfs(w, ccid)
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (visited[i] == -1) {
      dfs(i, cnt)
      cnt++
    }
  }
  return cnt
}