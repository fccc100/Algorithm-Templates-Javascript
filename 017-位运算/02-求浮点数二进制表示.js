// 十进制小数转二进制小数的方法是：
// 小数部分乘以 2，取整数部分作为二进制小数的下一位，小数部分作为下一次乘法的被乘数，直到小数部分为 0 或者二进制小数的长度超过 32 位。

// 0.8125 转二进制
// 0.8125 × 2 = 1.625 取整数部分1
// 0.625 × 2  = 1.25  取整数部分1
// 0.25 × 2   = 0.5   取整数部分0
// 0.5 × 2    = 1     取整数部分1
// 所以十进制小数 0.8125 的二进制小数表示为 0.1101 

function printBin(num) {
  let res = '0.'
  while (res.length <= 32 && num !== 0) {
      num *= 2
      const digit = Math.floor(num)
      res += digit
      num -= digit
  }
  return res.length <= 32 ? res : "ERROR"
}