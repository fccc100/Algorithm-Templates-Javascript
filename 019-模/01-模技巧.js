// 1.(a + b) % p = a % p + b % p
// 2.(a - b) % p = (a % p - b % p + p) % p
// 3.(a * b) % p = ((a % p) * (b % p)) % p

// 定理一：
// 给定正整数 a、p
// 如果 a % p = k
// 要使得(a - b) % p = 0
// 只需满足b % p = k

// 一个数模P等于k，要使得这个数减去一个数b模p等于0，只需要b % p = k

// 给定正整数 x，y，z，p，那么 (y - z) mod p = x 等价于 z mod p = (y - x) mod p。

// 定理二：
// (y2 - y1) % p = k 等价于 y1 % p = (y2 - k) % p

// 如： 前缀和数组中，要找到子数组和 % p = k，
// (presum[j] - presum[i]) % p = k
// 只需 presum[i] % p = (presum[j] - k) % p

// 题目: 1590-使数组和能被P整除