class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let maxSum=-Infinity

        for(let st=0;st<nums.length;st++){
            let currSum=1
           for(let end=st;end<nums.length;end++){
           currSum*=nums[end]
          maxSum=Math.max(currSum,maxSum)
           }
        }
        return maxSum
    }
}
