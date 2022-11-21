// 给定矩阵matrix， 生成前缀和
function solvePresum(matrix) {
  let m = matrix.length;
  let n = matrix[0].length;

  let presum = Array(m + 1);
  for (let i = 0; i <= m; i++) {
    presum[i] = Array(n + 1).fill(0);
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      presum[i][j] = presum[i - 1][j] + presum[i][j - 1] - presum[i - 1][j - 1] + matrix[i - 1][j - 1];
    }
  }
  return presum;
}

// 求左上角点[row1, col1] 至 右下角点[row2, col2]点的子矩阵和：
  // presum[row2 + 1][col2 + 1] - presum[row2 + 1][col1] - presum[row1][col2 + 1] + presum[row1][col1];
  
// function sumRange(row1, col1, row2, col2) {
//   return presum[row2 + 1][col2 + 1] - presum[row2 + 1][col1] - presum[row1][col2 + 1] + presum[row1][col1];
// }