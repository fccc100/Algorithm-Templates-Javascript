// 寻找图中的割点
function findCutPoints(edges, n) {
  let graph = Array(n + 1)
  for (let i = 0; i <= n; i++) {
    graph[i] = new Set()
  }

  for (let i = 0; i < edges.length; i++) {
    graph[edges[i][0]].add(edges[i][1])
    graph[edges[i][1]].add(edges[i][0])
  }

  let visited = Array(n + 1).fill(false)
  let ord = Array(n + 1).fill(0)
  let low = Array(n + 1).fill(0)
  let cnt = 0

  function dfs(v, parent) {
    visited[v] = true
    console.log('节点:' + v + ', parent:' + parent)
    ord[v] = cnt
    low[v] = ord[v]
    cnt ++
    let childCnt = 0

    for (let w of graph[v]) {
      if (!visited[w]) {
        dfs(w, v)
        low[v] = Math.min(low[v], low[w])
        if (v != parent && low[w] >= ord[v]) {
          console.log(v + '是割点')
        }

        childCnt++
        if (v == parent && childCnt > 1) {
          console.log(v + '是割点')
        }
      } else if (w != parent) {
        low[v] = Math.min(low[v], low[w])
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i, i)
    }
  }
}