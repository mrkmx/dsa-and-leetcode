/**
 * 3
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * 
 * Final thoughts:
 * - blank slate problem - determined the solution technique, start writing a boilerplate
 * - visualize the first iteration to have before your eyes the condition for changing the behavior of the code
 * - to search for repeated characters in a string, use a Set
 */

/**
 * @param {string} s
 * @return {number}
 * time = O(n)
 * space = O(n)
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0
    let right = 0
    let maxLen = 0
    const set = new Set()

    while (right < s.length) {
        if (!set.has(s[right])) {
            set.add(s[right])
            maxLen = maxLen > set.size ? maxLen : set.size
            right++
        } else {
            set.delete(s[left])
            left++
        }
    }
    return maxLen
};

console.log(lengthOfLongestSubstring("abcabcbb")) // => 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb")) // => 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew")) // => 3 ("wke")