class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left=0
        let maxFreq=0
        let maxLength=0
        const freqArr=new Array(26).fill(0)
        for(let right=0;right<s.length;right++){
            let index=s.charCodeAt(right)-65
            freqArr[index]++
            maxFreq=Math.max(maxFreq,freqArr[index])
            let windowLength=right-left+1
            if(windowLength-maxFreq>k){
                freqArr[s.charCodeAt(left)-65]--
                left++
            }
            maxLength=Math.max(maxLength,right-left+1)
        }
return maxLength
    }
    
}
