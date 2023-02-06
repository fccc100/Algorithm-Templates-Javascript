// 返回小于等于target的最大值的索引，没有小于等于target的值返回-1
function upper_floor(nums, target) {
  let l = -1;
  let r = nums.length - 1;
  while (l < r) {
    let mid = l + (r - l + 1 >> 1);
    if (nums[mid] <= target) {
      l = mid;
    } else {
      r = mid - 1;
    }
  }
  return l;
}