class SegmentTree {
  constructor(data, updateFunc) {
    this.data = data // 原始数据
    this.updateFunc = updateFunc // 更新函数
    this.n = data.length
    this.tree = new Array(4 * this.n) // 线段树数组
    this.lazy = new Array(4 * this.n).fill(0) // 懒惰标记数组
    this.build(1, 0, this.n - 1)
  }

  build(node, start, end) {
    if (start === end) {
      this.tree[node] = this.data[start]
    } else {
      const mid = Math.floor((start + end) / 2)
      this.build(node * 2, start, mid)
      this.build(node * 2 + 1, mid + 1, end)
      this.tree[node] = this.updateFunc(
        this.tree[node * 2],
        this.tree[node * 2 + 1]
      )
    }
  }

  updateLazy(node, start, end) {
    if (this.lazy[node] !== 0) {
      // 如果懒惰标记不为0，说明要对区间进行修改
      this.tree[node] += this.lazy[node] * (end - start + 1) // 修改节点的值
      if (start !== end) {
        // 子节点暂时不修改，先给子节点打上懒惰标记
        this.lazy[node * 2] += this.lazy[node]
        this.lazy[node * 2 + 1] += this.lazy[node]
      }
      this.lazy[node] = 0 // 将当前节点的懒惰标记清零
    }
  }

  // 更新[left, right]区间的值 + value
  update(left, right, value, node = 1, start = 0, end = this.n - 1) {
    this.updateLazy(node, start, end)
    if (left > end || right < start) return // 区间不相交，直接返回
    if (left <= start && right >= end) {
      // 当前区间被完全覆盖
      this.tree[node] += value * (end - start + 1)
      if (start !== end) {
        // 暂时不更新子节点，打上懒惰标记
        this.lazy[node * 2] += value
        this.lazy[node * 2 + 1] += value
      }
      return
    }
    const mid = Math.floor((start + end) / 2)
    this.update(left, right, value, node * 2, start, mid)
    this.update(left, right, value, node * 2 + 1, mid + 1, end)
    this.tree[node] = this.updateFunc(
      this.tree[node * 2],
      this.tree[node * 2 + 1]
    )
  }

  // 查询[ql, qr]区间的值
  query(ql, qr, node = 1, start = 0, end = this.n - 1) {
    if (ql > end || qr < start) {
      // 当前区间与查询区间不相交
      return this.unit() // 返回对应的区间单位元素
    }
    this.updateLazy(node, start, end)
    if (ql <= start && qr >= end) {
      // 当前区间被包含在查询区间内
      return this.tree[node] // 返回当前节点保存的区间信息
    }
    const mid = Math.floor((start + end) / 2)
    const left = this.query(ql, qr, node * 2, start, mid)
    const right = this.query(ql, qr, node * 2 + 1, mid + 1, end)
    return this.updateFunc(left, right) // 合并左右子树区间信息的结果
  }

  unit() {
    return 0 // 区间和的单位元素为0
  }
}
