class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result=[]
        function backtracking(start,current,target){
            if(target===0){
                result.push([...current])
                return
            }
            if(target<0)return;
            for(let i=start;i<nums.length;i++){
                current.push(nums[i])
                backtracking(i,current,target-nums[i])
            current.pop()
            }
        }
        backtracking(0,[],target)
        return result
    }
}
