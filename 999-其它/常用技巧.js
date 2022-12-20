// 1. 长度为n的数组一共有 n(n + 1)/2 个子数组

// 2. 长度为n的数组一共有 2^n 个子序列，2^n - 1个非空子序列

// 3.有坐标上的一些点，要找到一个点使得到每个点的距离和最小，这个点就是所有点的「中位数」
  // 如[2, 4, 6, 9, 13]，中位数6这个点就是到所有其他点的距离之和最小的点

// 4.1 给定一个数组，只能交换相邻元素，使数组有序的最小交换次数就是「数组逆序对」的数量
// 4.2 给定一个数组，可以交换任意元素，使数组有序的最小交换次数就是「数组的长度」减去「数组中环的个数」

// 5.1 对于给定的一个序列，如果我们希望通过修改最少的元素，使得它单调递增，
// 那么最少需要修改的元素个数，就是「序列的长度」减去「序列的最长递增子序列」的长度。
// 5.2 对于给定的一个序列，如果我们希望通过修改最少的元素，使得它非递减，
// 那么最少需要修改的元素个数，就是「序列的长度」减去「序列的最长非递减子序列」的长度。
  // 如[6, 3, 9, 5, 8, 12, 34], 最长递增子序列是3 5 8 12 34，那么最少需要修改7 - 5 = 2个数使得数组单调递增

// 6.[0, n]范围中, 可以同时被a或者b整除的数共有 n / a + n / b - n / lcm(a, b)个
//                可以同时被a或者b或者c整除的数共有 n / a + n / b + n / c - n / lcm(a, b) - n / lcm(a, c) - n / lcm(a, c) + n / lcm(a, b, c)个
// 例题：878. 第 N 个神奇数字 / 1201. 丑数 III

// 7.四平方和定理：任意一个正整数都可以被表示为至多四个正整数的平方和

// 8.要将一个数n分成任意份，使得每一份的值都小于limit，那么需要拆分的最小次数是(n - 1) / limit