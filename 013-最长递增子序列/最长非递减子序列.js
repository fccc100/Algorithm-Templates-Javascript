// 查找数组中的最长「非递减」子序列
// 2.二分查找 + 贪心
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