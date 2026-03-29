class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const myMap=new Map()
        for(let ele of nums){
            myMap.set(ele,(myMap.get(ele)||0)+1)
        }
        const uniqueArr=[...myMap.keys()]
        uniqueArr.sort((a,b)=>myMap.get(b)-myMap.get(a))
        return uniqueArr.splice(0,k)
    }
}
