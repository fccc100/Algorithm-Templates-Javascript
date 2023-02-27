// Bellman-Ford算法求解从源点src出发到t的最短路径
function bellmanFord(edges, n, src, t) {
  let graph = Array(n)
  for (let i = 0; i < n; i++) {
    graph[i] = new Map()
  }

  for (let i = 0; i < edges.length; i++) {
    let v1 = edges[i][0]
    let v2 = edges[i][1]
    let w = edges[i][2]
    graph[v1].set(v2, w)
    graph[v2].set(v1, w)
  }

  let dis = Array(n).fill(Infinity)
  let pre = Array(n).fill(-1)
  dis[src] = 0

  for (let i = 1; i < n; i++) {
    for (let v = 0; v < n; v++) {
      for (let w of graph[v].keys()) {
        if (dis[v] != Infinity && dis[v] + graph[v].get(w) < dis[w]) {
          dis[w] = dis[v] + graph[v].get(w)
          pre[w] = v
        }
      }
    }
  }

  let hasNegativeCycle = false
  for (let v = 0; v < n; v++) {
    for (let w of graph[v].keys()) {
      if (dis[v] != Infinity && dis[v] + graph[v].get(w) < dis[w]) {
        // 存在负权环
        hasNegativeCycle = true
      }
    }
  }

  if (hasNegativeCycle) {
    console.log('存在负权环')
  } else {
    let res = []
    while (t != src) {
      res.push(t)
      t = pre[t]
    }
    res.push(src)
    return res.reverse()
  }
}