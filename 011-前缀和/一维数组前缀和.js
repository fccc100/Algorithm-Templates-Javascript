// nums的前缀和，
// 求[l, r]区间的和：
// presum[r + 1] - presum[l]
function solvePresum(nums) {
  let n = nums.length;
  let res = Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    res[i] = res[i - 1] + nums[i - 1];
  }
  return res;
}
