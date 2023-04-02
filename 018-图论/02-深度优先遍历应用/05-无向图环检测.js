// 无向图的环检测
function cycleDetection(edges, n) {
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

  function dfs(v, parent) {
    visited[v] = true

    for (let w of graph[v]) {
      if (!visited[w]) {
        if (dfs(w, v)) return true
      } else if (w != parent) {
        return true
      }
    }
    return false
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      if (dfs(i, i)) return true
    }
  }
  return false
}
