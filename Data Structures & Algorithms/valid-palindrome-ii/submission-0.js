class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let left=0
        let right=s.length-1
        const isPalindrom=(l,r)=>{
            while(l<r){
                if(s[l]!==s[r])return false
                l++
                r--
            }
            return true
            }
            while(left<right){
                if(s[left]!==s[right]){
                    return isPalindrom(left+1,right) || isPalindrom(left,right-1)
                }
                left++
                right--
            }
            return true
        }
    }

