// nums中和为k的子数组个数
function subarraySum(nums, k) {
  let n = nums.length;
  let presum = Array(n + 1).fill(0);

  let res = 0;
  let map = new Map();
  for (let i = 1; i <= n; i++) {
    presum[i] = presum[i - 1] + nums[i - 1];
    if (presum[i] == k) {
      res++;
    }
    if (map.has(presum[i] - k)) {
      res += map.get(presum[i] - k);
    }

    map.set(presum[i], map.has(presum[i]) ? map.get(presum[i]) + 1 : 1);
  }

  return res;
}