// 对于给定的一个序列，如果我们希望通过修改最少的元素，使得它非递减，
// 那么最少需要修改的元素个数，就是「序列的长度」减去「序列的最长非递减子序列」的长度。
// 如[6, 3, 9, 5, 8, 12, 34], 最长递增子序列是3 5 8 12 34，那么最少需要修改7 - 5 = 2个数使得数组单调递增

// 例题：2111. 使数组 K 递增的最少操作次数
var kIncreasing = function (arr, k) {
  let n = arr.length;

  let res = 0;
  for (let i = 0; i < k; i++) {
    let curArr = []
    for (let j = i; j < n; j += k) {
      curArr.push(arr[j]);
    }

    res += curArr.length - lengthOfLIS(curArr);
  }
  return res;
};

var lengthOfLIS = function (nums) {
  let n = nums.length;

  // dp[i]表示长度为i的递增子序列的最后一个元素的最小值
  let dp = Array(n + 1).fill(0);
  let len = 1;
  dp[len] = nums[0];
  for (let i = 1; i < n; i++) {
    if (nums[i] >= dp[len]) {
      len++;
      dp[len] = nums[i];
    } else {
      let pos = lower(dp, 0, len, nums[i]);

      dp[pos + 1] = nums[i];
    }
  }
  return len;
};

// 二分查找小于等于target的最大值的索引
function lower(nums, l, r, target) {
  while (l < r) {
    let mid = l + (r - l + 1 >> 1);
    if (nums[mid] > target) {
      r = mid - 1;
    } else {
      l = mid;
    }
  }
  return l;
}