class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const mySet=new Set()
        for(const ele of nums){
            if(mySet.has(ele)){
               return true
            }
            mySet.add(ele)
        }
    return false
    }

}
