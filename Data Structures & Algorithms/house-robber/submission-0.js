class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let prev2=0
        let prev1=0
        for(let num of nums){
            let curr=Math.max(prev1,num+prev2)
            prev2=prev1
            prev1=curr
        }
        return prev1
    }
}
