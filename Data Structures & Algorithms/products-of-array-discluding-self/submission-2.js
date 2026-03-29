class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
       const n=nums.length;
       const result=new Array(n).fill(1)
       let left=1
       let right=1
       for(let i=0;i<n;i++){
        result[i]=left
        left*=nums[i]
       }
       for(let j=n-1;j>=0;j--){
        result[j]*=right
        right*=nums[j]
       }
       return result
    }
}
