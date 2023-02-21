// 问题，给定一组区间intervals, 从中选择最少的区间可以完全覆盖[0, n], 无法覆盖返回-1
// 如：给定intervals = [[0,2],[4,6],[8,10],[1,9],[1,5],[5,9]], n = 10
// 可以选择[0,2], [8,10], [1,9] 这三个区间完全覆盖[0, 10]

// 1. 动态规划
function solve(intervals, n) {
  let m = intervals.length
  intervals.sort((a, b) => a[0] - b[0])

  let dp = Array(n + 1).fill(Infinity)
  dp[0] = 0
  for (let i = 0; i < m; i++) {
    let start = intervals[i][0]
    let end = intervals[i][1]

    if (dp[start] == Infinity) return -1

    for (let j = start; j <= end; j++) {
      dp[j] = Math.min(dp[j], dp[start] + 1);
    }
  }

  return dp[n] == Infinity ? -1 : dp[n]
}