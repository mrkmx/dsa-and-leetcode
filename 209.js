/**
 * 209
 * https://leetcode.com/problems/minimum-size-subarray-sum/
 * 
 * Final thoughts:
 * - скользящее окно бывает переменной длины
 * - ищем минимум - первое сравнение с наибольшим числом, ищем максимум положительных - с 0
 * - вместо Infinity можно использовать Number.MAX_(MIN_)SAFE_INTEGER или Number.POSITIVE_(NEGATIVE_)INFINITY
 * - через указатели можно считать длину массива
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
