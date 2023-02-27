// Bellman-Ford算法求从源点src出发的单源最短路径
function bellmanFord(edges, n, src) {
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

  for (let i = 1; i < n; i++) {
    for (let v = 0; v < n; v++) {
      for (let w of graph[v].keys()) {
        if (dis[v] != Infinity && dis[v] + graph[v].get(w) < dis[w]) {
          dis[w] = dis[v] + graph[v].get(w)
        }
      }
    }
  }

  return dis
}