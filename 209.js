/**
 * 209
 * https://leetcode.com/problems/minimum-size-subarray-sum/
 * 
 * Final thoughts:
 * - sliding window can have variable length
 * - looking for the minimum - the first comparison with the largest number,
 *   looking for the maximum of positive ones - with 0
 * - instead of Infinity you can use Number.MAX_(MIN_)SAFE_INTEGER or Number.POSITIVE_(NEGATIVE_)INFINITY
 * - you can use pointers to read the length of an array
 */

/**
 * @param {number[]} nums 
 * @param {number} target
 * @return {number}
 * time = O(n)
 * space = O(1)
 */
var minSubArrayLen = function(nums, target) {
    let minLen = Number.MAX_SAFE_INTEGER
    let left = 0
    let right = 0
    let windowSum = 0

    while (right < nums.length) {
        windowSum += nums[right]
        while (windowSum >= target) {
            curLen = right - left + 1
            minLen = minLen < curLen ? minLen : curLen
            windowSum -= nums[left]
            left++
        }
        right++
    }

    return minLen === Number.MAX_SAFE_INTEGER ? 0 : minLen
};

console.log(minSubArrayLen([2,3,1,2,4,3], 7)) // => 2
console.log(minSubArrayLen([1,4,4], 4)) // => 1
console.log(minSubArrayLen([1,1,1,1,1,1,1,1], 11)) // => 0
console.log(minSubArrayLen([5,1,3,5,10,7,4,9,2,8], 15)) // => 2
