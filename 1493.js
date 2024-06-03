/**
 * 1493
 * https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/
 * 
 * Final thoughts:
 */

/**
 * @param {number[]} nums
 * @return {number}
 * time = O(n)
 * space = O(1)
 */
var longestSubarray = function(nums) {
    let maxLen = 0
    let right = 0
    let left = 0
    let zeroes = 0
    const limit = 1

    while (right < nums.length) {
        if (nums[right] === 0) zeroes++

        while (zeroes > limit) {
            if (nums[left] === 0) zeroes--
            left++
        }
        maxLen = Math.max(maxLen, right - left) // we don't need '+1' here since we are removing 1 element
        right++
    }
    return maxLen
};

console.log(longestSubarray([1,1,0,1])) // => 3
console.log(longestSubarray([0,1,1,1,0,1,1,0,1])) // => 5
console.log(longestSubarray([1,1,1])) // => 2
