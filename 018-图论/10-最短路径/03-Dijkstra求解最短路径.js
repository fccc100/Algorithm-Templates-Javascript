// Dijkstra算法求从源点src出发到目标点t的最短路径
function dijkstra(edges, n, src, t) {
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
  // pre数组pre[i]记录i节点是从哪个节点来的
  let pre = Array(n).fill(-1)
  dis[src] = 0
  pre[src] = src
  let visited = Array(n).fill(false)
  let pq = new PriorityQueue((a, b) => a[1] - b[1])
  pq.offer([src, 0])

  while (!pq.isEmpty()) {

    // 找当前最小的值
    let cur = pq.poll()[0]
    if (visited[cur]) continue

    // 找到的最小的值一定是最终的答案，对领边进行松弛操作
    visited[cur] = true
    for (let w of graph[cur].keys()) {
      if (!visited[w] && dis[cur] + graph[cur].get(w) < dis[w]) {
        dis[w] = dis[cur] + graph[cur].get(w)
        pq.offer([w, dis[w]])
        pre[w] = cur
      }
    }
  }

  let res = []
  while (t != src) {
    res.push(t)
    t = pre[t]
  }
  res.push(src)

  return res.reverse()
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