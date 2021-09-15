/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome(s: string): string {
    let maxStr: string = '', maxArr: Array<string> = [];
    let start = s.length, index = 0
    while (index < start) {
        const arr = midExpand(index, s, maxStr, maxArr)
        maxStr = arr[0]
        maxArr = arr[1]
        index++
    }
    if(!maxStr) maxStr = s[0]
    return maxStr
};
function midExpand(m: number, s: string, maxStr: string, maxArr: Array<string>): Array<any> {
    let str: string = ''
    let left = m, right = m + 1, maxLen = s.length - 1, step = 0
    while (left >= 0 && right <= maxLen) { 
        if (left === right - 1) { // 相邻
            if (s[left] === s[right]) {
                if(!str) str = s[left] + s[right]
                else str = str + s[right]
                left++
                right++
                step++
            } else {
                left = left - step - 1
            }
        } else { // 非相邻
            if(s[left] === s[right]) {
                if(!str) str = s[left+1]
                str = s[left] + str + s[right]
                left-- 
                right++
            } else break
        }
    }
    if (str.length > maxStr.length) {
        maxStr = str
        maxArr.push(str)
    }
    return [maxStr, maxArr]
}
// @lc code=end
longestPalindrome("babad")
