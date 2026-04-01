class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        if(s.length<2)return s
        let start=0
        let maxLength=0
        function expand(left,right){
            while(left>=0 && right<s.length && s[left]===s[right]){
                left--
                right++
            }
            return right-left-1
        }
        for(let i=0;i<s.length;i++){
            let len1=expand(i,i)
            let len2=expand(i,i+1)
            let maxLen=Math.max(len1,len2)
            if(maxLen>maxLength){
                maxLength=maxLen
                start=i-Math.floor((maxLen-1)/2)
            }
        }
        return s.substring(start,start+maxLength)
    }
}
