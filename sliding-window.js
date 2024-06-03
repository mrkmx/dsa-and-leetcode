/**
 * - The problem input is a linear data structure such as a linked list, array, or string
 * - You’re asked to find the longest/shortest substring, subarray, or a desired value
 * 
 * Problems:
 * - Maximum sum subarray of size ‘K’
 * - Longest substring with ‘K’ distinct characters
 * - String anagrams
 * 
 * Leetcode problems: 3, 209, 424, 643, 1004, 1493
 */

/**
 * Brute froce
 * time = O(k*n)
 * aux space = O(1)
 */
function maxSum(arr, k) {
    const n = arr.length
    if (n < k) return null

    let maxSum = 0
    for (let i = 0; i < n - k + 1; i++) {
        let curSum = 0
        for (let j = 0; j < k; j++) {
            curSum += arr[i + j]
        }
        maxSum = curSum > maxSum ? curSum : maxSum
    }
    return maxSum
}
console.log(maxSum([100, 200, 300, 400], 2)) // => 700
console.log(maxSum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)) // => 39
console.log(maxSum([2, 3], 3)) // => null

/**
 * Sliding window
 * time = O(n)
 * space = O(1)
 */
function maxSumSlidingWindow(arr, k) {
    const n = arr.length
    if (n < k) return null

    let maxSum = 0
    
    for (let i = 0; i < k; i++) {
        maxSum += arr[i]
    }

    let windowSum = maxSum
    
    for (let i = k; i < n; i++) {
        windowSum = windowSum - arr[i - k] + arr[i]
        maxSum = windowSum > maxSum ? windowSum : maxSum
    }

    return maxSum
}
console.log(maxSumSlidingWindow([100, 200, 300, 400], 2)) // => 700
console.log(maxSumSlidingWindow([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)) // => 39
console.log(maxSumSlidingWindow([2, 3], 3)) // => null
console.log(maxSumSlidingWindow([0,4,0,3,2], 1)) // => 4
