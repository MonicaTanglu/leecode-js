/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var maxStr = ''
    for (let i = 0, length = s.length; i < length; i++) {
        let str = s[i], start = i+1;
        while (start < length) {
            if (str.indexOf(s[start]) === -1) {
                str += s[start]
                start++
            } else break
        }
        if (str.length > maxStr.length) maxStr = str
    }
    return maxStr.length;
};
// @lc code=end
//lengthOfLongestSubstring("abcabcbb")

