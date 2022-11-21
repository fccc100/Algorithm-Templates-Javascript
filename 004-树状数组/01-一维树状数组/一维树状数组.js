class BinaryIndexedTree {
  constructor(n) {
    this.tree = Array(n + 1).fill(0);
  }

  lowbit(x) {
    return x & (-x);
  }

  preSum(x) {
    let res = 0;
    for (let i = x; i > 0; i -= this.lowbit(i)) {
      res += this.tree[i];
    }
    return res;
  }

  add(index, x) {
    for (let i = index; i < this.tree.length; i += this.lowbit(i)) {
      this.tree[i] += x;
    }
  }
}