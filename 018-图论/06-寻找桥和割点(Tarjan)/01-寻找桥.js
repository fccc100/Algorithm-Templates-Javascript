// 寻找图中的桥
// edges[i] = [v, w]表示 v - w 之间有一条无向边
function findBridges(edges, n) {
  let graph = Array(n + 1)
  for (let i = 0; i <= n; i++) {
    graph[i] = new Set()
  }

  for (let i = 0; i < edges.length; i++) {
    graph[edges[i][0]].add(edges[i][1])
    graph[edges[i][1]].add(edges[i][0])
  }

  let visited = Array(n + 1).fill(false)

  // ord[i]表示遍历到i的序号
  let ord = Array(n + 1).fill(0)

  // low[i]表示从i能到达的最小的ord值
  let low = Array(n + 1).fill(0)
  let cnt = 0
  let res = []
  function dfs(v, parent) {
    visited[v] = true
    console.log('节点:' + v + ', parent:' + parent)
    ord[v] = cnt
    low[v] = ord[v]
    cnt ++

    for (let w of graph[v]) {
      if (!visited[w]) {
        dfs(w, v)
        low[v] = Math.min(low[v], low[w])

        // w是v的相邻点，通过相邻点w能到达的最小ord值比v的ord值还大
        // 说明通过相邻点w无法到达v之前的点，所以边 v - w 是桥
        if (low[w] > ord[v]) {
          res.push([v, w])
          console.log(v + '-' + w + '是桥')
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
  return res
}