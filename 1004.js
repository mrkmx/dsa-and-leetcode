/**
 * 1004
 * https://leetcode.com/problems/max-consecutive-ones-iii/
 * 
 * Final thoughts:
 * - similar problems with the same solution technique
 *   may have different algorithms (1004 and 424).
 *   This algorithm is simpler because there are only 2 possible values
 *   ​​and we know that only 'zeroes' compared to 'k' move the window
 * - zeros can be counted or the number of available 'k' can be counted
 * - the main thing is to find the correct condition for window displacement
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * time = O(n)
 * space = O(1)
 */
var longestOnes = function(nums, k) {
    let right = 0
    let left = 0
    let zeroes = 0
    let maxLen = 0

    while (right < nums.length) {
        if (nums[right] === 0) zeroes++
        while (zeroes > k) {
            if (nums[left] === 0) zeroes--
            left++
        }
        const window = right - left + 1
        maxLen = Math.max(maxLen, window)
        right++
    }

    return maxLen

    // Accepted
    // while (right < nums.length) {
    //     if (nums[right] === 0) k--
    //     if (k < 0) {
    //         if (nums[left] === 0) {
    //             k++
    //         }
    //         left++
    //     }
        
    //     right++
    // }
    // return right - left
};

console.log(longestOnes([1,0,1,0], 1)) // => 3
console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2)) // => 6
console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3)) // => 10