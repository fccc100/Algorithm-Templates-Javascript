// Floyed算法求所有点对的最短路径
function floyed(edges, n) {
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

  let dis = Array(n)
  for (let v = 0; v < n; v++) {
    dis[v] = Array(n).fill(Infinity)
  }
  for (let v = 0; v < n; v++) {
    dis[v][v] = 0
    for (let w of graph[v].keys()) {
      dis[v][w] = graph[v].get(w)
    }
  }

  for (let t = 0; t < n; t++) {
    for (let v = 0; v < n; v++) {
      for (let w = 0; w < n; w++) {
        if (dis[v][t] != Infinity && dis[t][w] != Infinity && dis[v][t] + dis[t][w] < dis[v][w]) {
          dis[v][w] = dis[v][t] + dis[t][w]
        }
      }
    }
  }

  let hasNegativeCycle = false
  for (let v = 0; v < n; v++) {
    if (dis[v][v] < 0) {
      hasNegativeCycle = true
    }
  }

  if (hasNegativeCycle) {
    console.log('存在负权环')
  } else {
    return dis
  }
}