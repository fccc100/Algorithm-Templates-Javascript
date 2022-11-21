// 返回target的索引， 不存在返回-1
function binarySearch(nums, target) {
  let l = 0;
  let r = nums.length - 1;
  // 对[l, r]进行搜索
  while(l <= r) {
    let mid = l + (r - l >> 1);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else if (nums[mid] > target) {
      r = mid - 1;
    }
  }

  return -1;
}