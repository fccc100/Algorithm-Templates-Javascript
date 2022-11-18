// 返回的数组依次是最大子数组和，最大子数组左边界及右边界(闭区间)
function maxSubarraySum(nums) {
  let n = nums.length;

  let start = 0;
  let max = nums[0];
  let presum = nums[0];
  let res = Array(3);

  for (let i = 1; i < n; i++) {
      if (presum > 0) {
          presum += nums[i];
      } else {
          presum = nums[i];
          start = i;
      }
      if (presum > max) {
          max = presum;
          res[1] = start;
          res[2] = i;
      }
  }
  res[0] = max;
  return res;
}