// 求解图中从src点出发的哈密尔顿路径
function hamiltonPath(edges, n, src) {
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
  let pre = Array(n).fill(0)
  let end = -1

  function dfs(v, parent, left) {
    visited[v] = true
    pre[v] = parent
    left--
    if (left == 0) {
      end = v
      return true
    }

    for (let w of graph[v]) {
      if (!visited[w]) {
        if (dfs(w, v, left)) return true
      }
    }

    visited[v] = false
    return false
  }

  dfs(src, src, n)

  let res = []
  if (end == -1) {
    console.log('没有哈密尔顿路径')
    return res
  } else {
    let cur = end
    while (cur != src) {
      res.push(cur)
      cur = pre[cur]
    }
    res.push(src)
    return res.reverse()
  }
}