/**
 * 643
 * https://leetcode.com/problems/maximum-average-subarray-i/description/
 * 
 * Final thoughts:
 * - max avg from max sum (obviously)
 * - sliding window - in the second loop in each iteration you already get the result of the operation for the entire window
 * - attention to variables
 * - fixed sliding window - i < k
 * - the meaning of a sliding window - at iteration from the current value of the window
 *   we subtract the value of the left index, add the value of the right
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * time = O(n)
 * space = O(1)
 */
function findMaxAverage(nums, k) {
    let maxSum = 0

    for (let i = 0; i < k; i++) {
        maxSum += nums[i]
    }

    let windowSum = maxSum

    for (let i = k; i < nums.length; i++) {
        windowSum = windowSum - nums[i - k] + nums[i]
        maxSum = windowSum > maxSum ? windowSum : maxSum
    }

    return (maxSum / k).toFixed(5)
}

console.log(findMaxAverage([1,12,-5,-6,50,3], 4)) // => 12.75000
console.log(findMaxAverage([5], 1)) // => 5.00000
console.log(findMaxAverage([3,3,4,3,0], 3)) // => 3.33333
console.log(findMaxAverage([0,4,0,3,2], 1)) // => 4.00000
