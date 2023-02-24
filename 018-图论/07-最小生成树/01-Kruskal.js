// Kruskal思路:
// 将所有边按权值从小到大排序
// 从权值最小的边v1 - v2开始选择，如果v1 - v2已经连通了，那不能选择这条边，会形成环
// 如果v1 - v2不连通，说明v1 - v2肯定是最小生成树的一条边
// 判断是否连通使用并查集

// edges[i] = [v1, v2, w]表示v1 - v2之间有一条无向边权值为w
function kruskal(edges, n) {
  let res = []

  if (cccount(edges, n) > 1) {
    // 多个联通分量，没有最小生成树的情况
    return []
  }

  edges.sort((a, b) => a[2] - b[2])
  let uf = new UnionFind(n)
  for (let i = 0; i < edges.length; i++) {
    let v1 = edges[i][0]
    let v2 = edges[i][1]
    if (!uf.isConnected(v1, v2)) {
      res.push(edges[i])
      uf.union(v1, v2)
    }
  }

  // 多个联通分量时没有最小生成树，n个顶点有最小生成树时边一定是 n - 1
  return res
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

// 并查集
class UnionFind {
  constructor(n) {
    this.parent = Array(n);
    this.rank = Array(n);
    this.size = Array(n);
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
      this.rank[i] = 1;
      this.size[i] = 1;
    }
  }

  // 查询p的根节点
  find(p) {
    while (p != this.parent[p]) {
      this.parent[p] = this.parent[this.parent[p]];
      p = this.parent[p];
    }
    return p;
  }

  // 判断p q是否联通
  isConnected(p, q) {
    return this.find(p) == this.find(q);
  }

  // 合并
  union(p, q) {
    let pRoot = this.find(p);
    let qRoot = this.find(q);
    if (pRoot == qRoot) {
      return;
    }
    if (this.rank[pRoot] < this.rank[qRoot]) {
      this.parent[pRoot] = qRoot;
      this.size[qRoot] += this.size[pRoot];
    } else if (this.rank[qRoot] < this.rank[pRoot]) {
      this.parent[qRoot] = pRoot;
      this.size[pRoot] += this.size[qRoot];
    } else {
      this.parent[pRoot] = qRoot;
      this.rank[qRoot] += 1;
      this.size[qRoot] += this.size[pRoot];
    }
  }
}