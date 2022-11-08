// 最大堆

class MaxHeap {
  constructor() {
    this.data = []
  }

  size() {
    return this.data.length
  }

  isEmpty() {
    return this.size() == 0
  }

  // 堆中添加元素
  offer(num) {
    this.data.push(num);
    this.__siftUp(this.size() - 1);
  }

  // 查看堆顶元素
  peek() {
    return this.data[0];
  }

  // 取出堆顶元素
  poll() {
    let ret = this.data[0];

    this.__swap(0, this.size() - 1);
    this.data.pop();
    this.__siftDown(0);

    return ret;
  }

  __leftChild(index) {
    return 2 * index + 1;
  }

  __rightChild(index) {
    return 2 * index + 2;
  }

  __parent(index) {
    return (index - 1) >> 1;
  }

  __swap(i, j) {
    let temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }

  // 元素上浮
  __siftUp(index) {
    while(index > 0 && this.data[this.__parent(index)] < this.data[index]) {
      this.__swap(index, this.__parent(index));
      index = this.__parent(index);
    }
  }

  __siftDown(index) {
    while(this.__leftChild(index) < this.size()) {
      let maxIndex = this.__leftChild(index);
      let rightIndex = this.__rightChild(index);
      if (rightIndex < this.size() && this.data[rightIndex] > this.data[maxIndex]) {
        maxIndex = rightIndex;
      }
      if (this.data[index] > this.data[maxIndex]) {
        break;
      }

      this.__swap(index, maxIndex);
      index = maxIndex;
    }
  }
}