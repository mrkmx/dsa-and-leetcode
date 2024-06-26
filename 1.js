/**
 * 1
 * https://leetcode.com/problems/two-sum/description/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * time = O(n)
 * space = O(n)
 */
var twoSum = function(nums, target) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]
        if (map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(nums[i], i)
    }
};

console.log(twoSum([2,7,11,15], 9)) // => [0,1]
console.log(twoSum([3,2,4], 6)) // => [1,2]
console.log(twoSum([3,3], 6)) // => [0,1]
