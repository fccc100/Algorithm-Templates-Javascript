// 线性筛，在埃式筛的基础上，线性筛只会用最小质因子把合数筛掉
function solvePrimes(n) {
  let isPrime = Array(n).fill(1)
  for (let i = 0; i < 2; i++) {
    isPrime[i] = 0
  }

  // 记录已经选出的质数
  let primes = []

  for (let i = 2; i < n; i++) {
    if (isPrime[i] == 1) {
      primes.push(i)
    }
    
    // 遍历已经选出的质数
    for (let j = 0; j < primes.length && i * primes[j] < n; j++) {
      isPrime[i * primes[j]] = 0

      // i % primes[j] == 0，此时primes[j]一定是i的最小质因子，primes[j]也是primes[j] * i的最小质因子
      // 遇到这个最小质因子之后，就可以退出了
      if (i % primes[j] == 0) {
        break
      }
    }
  }
  return isPrime
}

// 2 3 5
// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 ... 100
// 0 0 1 1 0 1 0 1 0 0 0  1  0  1  1  0  1  1  1  1  1
// 