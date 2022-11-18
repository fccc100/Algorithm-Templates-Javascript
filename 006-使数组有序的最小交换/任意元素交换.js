// 给定数组，可以交换任意元素，使数组有序的最小交换次数

// 解法一
function minSwaps(arr) {
  let n = arr.length;

  let arrpos = [];
  for (let i = 0; i < n; i++) {
    arrpos.push([arr[i], i]);
  }

  arrpos.sort(function (a, b) {
    return a[0] - b[0];
  });

  let vis = Array(n).fill(false);
  let res = 0;

  for (let i = 0; i < n; i++) {
    if (vis[i] || arrpos[i][1] == i)
      continue;
    let cycle_size = 0;
    let j = i;
    while (!vis[j]) {
      vis[j] = true;

      j = arrpos[j][1];

      cycle_size++;
    }

    if (cycle_size > 0) {
      res += (cycle_size - 1);
    }
  }

  return res;
}

// ---------------------------------------分割线--------------------------------------------------------------

// 解法二： 并查集
function minSwaps(arr) {
  let n = arr.length;

  let arrpos = [];
  for (let i = 0; i < n; i++)
    arrpos.push([arr[i], i]);

  arrpos.sort(function (a, b) {
    return a[0] - b[0];
  });

  let uf = new UnionFind(n);
  for (let i = 0; i < n; i++) {
    uf.union(i, arrpos[i][1]);
  }

  return n - uf.getConnectedComponent();
}

class UnionFind {
  constructor(size) {
    this.parent = Array(size);
    this.rank = Array(size);
    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
      this.rank[i] = 1;
    }
  }

  find(p) {
    while (p != this.parent[p]) {
      p = this.parent[p];
    }
    return p;
  }

  isConnected(p, q) {
    return this.find(p) == this.find(q);
  }

  union(p, q) {
    let pRoot = this.find(p);
    let qRoot = this.find(q);
    if (pRoot == qRoot) {
      return;
    }
    if (this.rank[pRoot] < this.rank[qRoot]) {
      this.parent[pRoot] = qRoot;
    } else if (this.rank[qRoot] < this.rank[pRoot]) {
      this.parent[qRoot] = pRoot;
    } else {
      this.parent[pRoot] = qRoot;
      this.rank[qRoot] += 1;
    }
  }

  getConnectedComponent() {
    let res = 0;
    for (let i = 0; i < this.parent.length; i++) {
      if (this.parent[i] == i) {
        res++;
      }
    }
    return res;
  }
}