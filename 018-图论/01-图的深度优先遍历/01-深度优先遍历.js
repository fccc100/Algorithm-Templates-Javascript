function dfs(edges, n) {
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
  let res = []

  function __dfs(v) {
    visited[v] = true

    console.log('遍历v节点')
    res.push(v)
    for (let w of graph[v]) {
      if (!visited[w]) {
        __dfs(w)
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      __dfs(i)
    }
  }

  return res
}