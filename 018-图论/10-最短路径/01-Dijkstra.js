// Dijkstra算法求从源点src出发的单源最短路径
function dijkstra(edges, n, src) {
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
  dis[src] = 0
  let visited = Array(n).fill(false)

  while (true) {

    // 找当前最小的值
    let curDis = Infinity
    let cur = -1
    for (let v = 0; v < n; v++) {
      if (!visited[v] && dis[v] < curDis) {
        curDis = dis[v]
        cur = v
      }
    }
    if (cur == -1) break

    // 找到的最小的值一定是最终的答案，对领边进行松弛操作
    visited[cur] = true
    for (let w of graph[cur].keys()) {
      if (!visited[w] && dis[cur] + graph[cur].get(w) < dis[w]) {
        dis[w] = dis[cur] + graph[cur].get(w)
      }
    }
  }

  return dis
}