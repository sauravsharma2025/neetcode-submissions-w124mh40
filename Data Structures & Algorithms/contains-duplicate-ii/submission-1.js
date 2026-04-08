class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {

    const mySet=new Set()
    for(let i=0;i<nums.length;i++){
      if(mySet.has(nums[i])){
        return true
      }
      mySet.add(nums[i])
      if(mySet.size>k){
        mySet.delete(nums[i-k])
      }
    }
    return false
    }}
