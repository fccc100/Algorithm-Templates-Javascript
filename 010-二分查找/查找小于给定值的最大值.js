// 返回小于target的最大值的索引, 不存在小于target的值返回-1
function lower(nums, target) {
  let l = -1;
  let r = nums.length - 1;
  while (l < r) {
    let mid = l + (r - l + 1 >> 1);
    if (nums[mid] >= target) {
      r = mid - 1;
    } else {
      l = mid;
    }
  }
  return l;
}