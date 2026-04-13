class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        const mySet=new Set()
        for(let ele of nums){
            if(mySet.has(ele))return ele
            mySet.add(ele)
        }
    }
}
