// 求解图中的哈密尔顿回路
function hamiltonLoop(edges, n) {
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

    for (let w of graph[v]) {
      if (!visited[w]) {
        if (dfs(w, v, left)) return true
      } else if (w == 0 && left == 0) {
        end = v
        return true
      }
    }

    visited[v] = false
    return false
  }

  dfs(0, 0, n)
  
  let res = []
  if (end == -1) {
    console.log('没有哈密尔顿回路')
    return res
  } else {
    let cur = end
    while (cur != 0) {
      res.push(cur)
      cur = pre[cur]
    }
    res.push(0)
    return res.reverse()
  }
}
