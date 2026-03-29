class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const mySet=new Set()
        for(let ele of nums){
            if(mySet.has(ele))return true
            mySet.add(ele,1)
        }
        return false
    }
}
