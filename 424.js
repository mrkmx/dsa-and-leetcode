/**
 * 424
 * https://leetcode.com/problems/longest-repeating-character-replacement/
 * 
 * Final thoughts:
 * - to find the number of letters used in a row, use the counter in Map {"a": 0, "b": 0}
 * - determine whether the algorithm needs to scan the entire map at each iteration
 *   or whether memorizing the useful result is enough
 * - draw an explanation of the algorithm
 * 
 * Good explanation: https://www.youtube.com/watch?v=gqXU1UyA8pk
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 * time = O(n)
 * space = O(n)
 */
var characterReplacement = function(s, k) {
    let maxLen = 0
    let right = 0
    let left = 0
    let maxFrequency = 0
    let charCounters = new Map()

    while (right < s.length) {
        charCounters.set(s[right], charCounters.get(s[right]) + 1 || 1)
        maxFrequency = Math.max(maxFrequency, charCounters.get(s[right]))
        
        /*
        нам не надо сканировать каждый раз мэп,
        т.к. результат зависит только от частоты максимального символа.
        Здесь отказ от сканирования всего мэпа дает прирост скорости в 2-3 раза.
        */
        // while ((right - left + 1) - Math.max(...charCounters.values()) > k) {
        while ((right - left + 1) - maxFrequency > k) {
            charCounters.set(s[left], charCounters.get(s[left]) - 1)
            left++
        }

        maxLen = Math.max(maxLen, right - left + 1)
        right++
    }
    
    return maxLen
};

console.log(characterReplacement("ABAB", 2)) // => 4, AAAA or BBBB
console.log(characterReplacement("AABABBA", 1)) // => 4, (AAAA)BBA or AA(BBBB)A
console.log(characterReplacement("IMNJJTRMJEGMSOLSCCQICIHLQIOGBJAEHQOCRAJQMBIBATGLJDTBNCPIFRDLRIJHRABBJGQAOLIKRLHDRIGERENNMJSDSSMESSTR", 2)) // => 6