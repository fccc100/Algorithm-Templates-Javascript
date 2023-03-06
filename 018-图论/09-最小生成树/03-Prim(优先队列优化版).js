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
  
  let pq = new PriorityQueue((a, b) => a[2] - b[2])
  for (let w of graph[0].keys()) {
    pq.offer([0, w, graph[0].get(w)])
  }

  while (!pq.isEmpty()) {
    let minEdge = pq.poll()
    if (visited[minEdge[0]] && visited[minEdge[1]]) {
      continue
    }

    res.push(minEdge)
    let newV = visited[minEdge[0]] ? minEdge[1] : minEdge[0]
    visited[newV] = true
    for (let w of graph[newV].keys()) {
      if (!visited[w]) {
        pq.offer([newV, w, graph[newV].get(w)])
      }
    }
  }

  return res
}

// 优先队列
class PriorityQueue {
  constructor(comparator = this.__defaultComparator) {
    this.comparator = comparator
    this.data = []
  }

  size() {
    return this.data.length
  }

  isEmpty() {
    return this.size() == 0
  }

  offer(e) {
    this.data.push(e)
    this.__siftUp(this.size() - 1)
  }

  peek() {
    return this.data[0]
  }

  poll() {
    let res = this.peek()
    this.__swap(0, this.size() - 1)
    this.data.pop()
    this.__siftDown(0)
    return res
  }

  __defaultComparator(a, b) {
    return a - b;
  }

  __leftChild(index) {
    return 2 * index + 1
  }

  __rightChild(index) {
    return 2 * index + 2
  }

  __parent(index) {
    return (index - 1) >> 1
  }

  __swap(i, j) {
    let temp = this.data[i]
    this.data[i] = this.data[j]
    this.data[j] = temp
  }

  __siftUp(index) {
    while (index > 0 && this.comparator(this.data[this.__parent(index)], this.data[index]) > 0) {
      this.__swap(index, this.__parent(index))
      index = this.__parent(index)
    }
  }

  __siftDown(index) {
    while (this.__leftChild(index) < this.size()) {
      let targetIndex = this.__leftChild(index)
      let rightIndex = this.__rightChild(index)
      if (rightIndex < this.size() && this.comparator(this.data[rightIndex], this.data[targetIndex]) < 0) {
        targetIndex = rightIndex
      }
      if (this.comparator(this.data[index], this.data[targetIndex]) < 0) {
        break
      }

      this.__swap(index, targetIndex)
      index = targetIndex
    }
  }
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