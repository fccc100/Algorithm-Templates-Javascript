// queries中是[l, r]区间，需要对nums中每个[l, r]区间+1
function diff (nums, queries) {
  let n = nums.length
  let diff = Array(n + 1).fill(0)
  for (let i = 0; i < queries.length; i++) {
    let l = queries[i][0]
    let r = queries[i][1]
    diff[l]++
    diff[r + 1]--
  }

  let presum = 0
  for (let i = 0; i < n; i++) {
    presum += diff[i]
    nums[i] += presum
  }
  return nums
}
