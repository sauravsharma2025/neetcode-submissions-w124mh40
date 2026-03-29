class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
       let left=0
       const mySet=new Set()
       let maxLength=0
       for(let right=0;right<s.length;right++){
        while(mySet.has(s[right])){
            mySet.delete(s[left])
            left++
        }
        mySet.add(s[right])
        maxLength=Math.max(maxLength,right-left+1)
       }
       return maxLength
    }
}
