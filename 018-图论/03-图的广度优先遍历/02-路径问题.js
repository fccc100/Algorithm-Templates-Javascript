function bfsSingleSourcePath(edges, n, s, t) {
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
  let pre = Array(n).fill(-1)
  
  function __bfs(v) {
    let queue = []
    queue.push(v)
    visited[v] = true
    pre[v] = v
    while (queue.length) {
      let curV = queue.shift()
      
      for (let w of graph[curV]) {
        if (!visited[w]) {
          queue.push(w)
          visited[w] = true
          pre[w] = curV
        }
      }
    }
  }
  
  __bfs(s)
  
  let res = []
  if (!visited[t]) return res
  let cur = t
  while (cur != s) {
    res.push(cur)
    cur = pre[cur]
  }
  res.push(s)
  return res.reverse()
}