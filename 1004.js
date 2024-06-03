/**
 * 1004
 * https://leetcode.com/problems/max-consecutive-ones-iii/
 * 
 * Final thoughts:
 * - похожие задачи, с одной техникой решения могут иметь разные алгоритмы (1004 и 424)
 *   этот алгоритм проще, т.к. всего 2 варианта значений
 *   и мы знаем, что только 'zeroes' в сравнении с 'k' двигают окно
 * - можно считать нули, можно считать количество доступных 'k'
 * - главное - найти правильное условие смещения окна
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