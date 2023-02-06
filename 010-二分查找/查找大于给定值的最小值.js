// 返回大于target的最小值的索引，没有大于target的值返回n
function lower_ceil(nums, target) {
  let l = 0;
  let r = nums.length;
  while (l < r) {
    let mid = l + (r - l >> 1);
    if (nums[mid] <= target) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return l;
}
