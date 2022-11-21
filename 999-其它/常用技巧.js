// 1. 长度为n的数组一共有 n(n + 1)/2 个子数组

// 2. 长度为n的数组一共有 2^n 个子序列，2^n - 1个非空子序列

// 3.有坐标上的一些点，要找到一个点使得到每个点的距离和最小，这个点就是所有点的「中位数」
  // 如[2, 4, 6, 9, 13]，中位数6这个点就是到所有其他点的距离之和最小的点

// 4.给定一个数组，只能交换相邻元素，使数组有序的最小交换次数就是「数组逆序对」的数量

// 5.对于给定的一个序列，如果我们希望通过修改最少的元素，使得它单调递增，
// 那么最少需要修改的元素个数，就是「序列的长度」减去「序列的最长递增子序列」的长度。
  // 如[6, 3, 9, 5, 8, 12, 34], 最长递增子序列是3 5 8 12 34，那么最少需要修改7 - 5 = 2个数使得数组单调递增