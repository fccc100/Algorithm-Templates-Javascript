// 求[0, n)所有质数, isPrime[i] = 1表示i是质数， 为0表示i是非质数
// 0 和 1不是质数
function solvePrimes(n) {
  let isPrime = Array(n).fill(1)
  for (let i = 0; i < 2; i++) {
    isPrime[i] = 0
  }

  for (let i = 2; i < n; i++) {
    // 从2开始遍历，每遍历到一个数i，则 从j = i * i开始， 每增加一次i，都标记为非质数
    // 为什么可以从i * i开始， 因为 i 乘 [1, i - 1]的情况在处理前面的i时就已经标记过了
    if (isPrime[i] == 1) {
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = 0
      }
    }
  }
  return isPrime
}

// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
// 0 0 1 1 0 1 0 1 0 1 0  1  0  1  0  1  0  1  0  1  0
