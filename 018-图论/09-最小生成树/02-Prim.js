// 
function prim(edges, n) {

  if (cccount(edges, n) > 1) {
    // 多个联通分量，没有最小生成树的情况
    // 或者也可以通过下面的visited数组是否每个点都遍历到了来判断
    return []
  }

  let graph = Array(n)
  for (let i = 0; i < n; i++) {
    graph[i] = new Map()
  }

  for (let i = 0; i < edges.length; i++) {
    let v1 = edges[i][0]
    let v2 = edges[i][1]
    let w = edges[i][2]
    graph[v1].set(v2, graph[v1].has(v2) ? Math.min(graph[v1].get(v2), w) : w)
    graph[v2].set(v1, graph[v2].has(v1) ? Math.min(graph[v2].get(v1), w) : w)
  }

  let res = []
  let visited = Array(n).fill(false)
  visited[0] = true
  
  // 总共需要选出n - 1条边，循环n - 1次
  for (let i = 1; i < n; i++) {

    let minEdge = [-1, -1, Infinity]
    for (let v = 0; v < n; v++) {
      if (visited[v]) {
        for (let w of graph[v].keys()) {
          if (!visited[w] && graph[v].get(w) < minEdge[2]) {
            minEdge = [v, w, graph[v].get(w)]
          }
        }
      }
    }
    res.push(minEdge)
    visited[minEdge[0]] = true
    visited[minEdge[1]] = true
  }
  return res
}

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
