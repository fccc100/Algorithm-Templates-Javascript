// 给定数组，只能交换相邻元素，使数组有序的最小交换次数
// 就是求逆序对的数量

function reversePairs(nums) {
  let res = 0;

  function mergeSort(nums, l, r) {
    if (l >= r) return;
    let mid = Math.floor(l + (r - l) / 2);
    mergeSort(nums, l, mid);
    mergeSort(nums, mid + 1, r);
    if (nums[mid] > nums[mid + 1]) {
      merge(nums, l, mid, r);
    }
  }

  function merge(nums, l, mid, r) {
    let temp = nums.slice(l, r + 1);
    let i = l;
    let j = mid + 1;
    for (let k = l; k <= r; k++) {
      if (i > mid) {
        nums[k] = temp[j - l];
        j++;
      } else if (j > r) {
        nums[k] = temp[i - l];
        i++;
      } else if (temp[i - l] <= temp[j - l]) {
        nums[k] = temp[i - l];
        i++;
      } else {
        res += mid - i + 1;
        nums[k] = temp[j - l];
        j++;
      }
    }
  }

  mergeSort(nums, 0, nums.length - 1);
  return res;
};