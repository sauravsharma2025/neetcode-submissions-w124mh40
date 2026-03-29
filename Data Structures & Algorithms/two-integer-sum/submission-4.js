class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for(let i=0;i<nums.length;i++){
            const complement=target-nums[i]
           const result=nums.indexOf(complement,i+1)
           if(result!==-1){
            return [i,result]
           }
        }
    }
}