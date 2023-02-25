// 求解欧拉回路
function findEulerLoop(edges, n) {
  let res = []

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

  for (let i = 0; i < n; i++) {
    if (graph[i].size % 2 == 1) return res
  }

  let stack = []
  stack.push(0)
  while (stack.length) {
    let curV = stack[stack.length - 1]
    if (graph[curV].size != 0) {
      let w = graph[curV].keys().next().value
      graph[curV].delete(w)
      graph[w].delete(curV)
      stack.push(w)
    } else {
      res.push(stack.pop())
    }
  }
  return res
}

