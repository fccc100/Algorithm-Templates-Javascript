function bfs(edges, n) {
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

  function __bfs(v) {
    let queue = []
    queue.push(v)
    visited[v] = true
    while (queue.length) {
      let curV = queue.shift()
      res.push(curV)

      for (let w of graph[curV]) {
        if (!visited[w]) {
          queue.push(w)
          visited[w] = true
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      __bfs(i)
    }
  }

  return res
}