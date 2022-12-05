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

  // 获取联通分量个数
  getConnectedComponent() {
    let res = 0;
    for (let i = 0; i < this.parent.length; i++) {
      if (this.parent[i] == i) {
        res++;
      }
    }
    return res;
  }

  // 获取某个元素p所属联通分量内的元素个数
  getComponentSize(p) {
    return this.size[this.find(p)];
  }
}