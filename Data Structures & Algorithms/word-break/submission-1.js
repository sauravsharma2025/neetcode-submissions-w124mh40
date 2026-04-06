class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const mySet=new Set(wordDict)
        let maxLength=wordDict[0].length
        for(let ele of wordDict){
            maxLength=Math.max(maxLength,ele.length)
        }
        const dp=new Array(s.length+1).fill(false)
        dp[0]=true
        for(let i=0;i<=s.length;i++){
            for(let j=i-1;j>=0 && (i-j)<=maxLength;j--){
                if(dp[j] && mySet.has(s.substring(j,i))){
                    dp[i]=true
                    break
                }
            }
        }
        return dp[s.length]
    }
}
