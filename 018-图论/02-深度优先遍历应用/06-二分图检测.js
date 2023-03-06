// 二分图检测
function bipartitionDetetion(edges, n) {
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
  let colors = Array(n).fill(-1)

  function dfs(v, color) {
    visited[v] = true
    colors[v] = color

    for (let w of graph[v]) {
      if (!visited[w]) {
        if (!dfs(w, 1 - color)) return false
      } else if (colors[w] == colors[v]) {
        return false
      }
    }
    return true
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      if (!dfs(i, 0)) return false
    }
  }
  return true
}