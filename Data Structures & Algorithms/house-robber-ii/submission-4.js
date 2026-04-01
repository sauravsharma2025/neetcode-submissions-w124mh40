class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        function internalFunc(nums){
        if(nums.length===1)return nums[0]
            let prev2=nums[0]
            let prev1=Math.max(nums[0],nums[1])
            for(let i=2;i<nums.length;i++){
                const curr=Math.max(prev1,prev2+nums[i])
                prev2=prev1
                prev1=curr
                
            }
            return prev1
        }
                if (nums.length === 1) return nums[0]

        return Math.max(
            internalFunc(nums.slice(0,nums.length-1)),
            internalFunc(nums.slice(1))
        )
    }
}
