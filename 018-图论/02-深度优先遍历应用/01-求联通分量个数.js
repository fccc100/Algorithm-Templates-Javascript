// 求联通分量个数
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

  let visited = Array(n).fill(false)
  let res = 0

  function dfs(v) {
    visited[v] = true
    for (let w of graph[v]) {
      if (!visited[w]) {
        dfs(w)
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i)
      res++
    }
  }
  return res
}