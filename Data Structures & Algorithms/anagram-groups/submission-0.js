class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
          const obj={}
          for(let ele of strs){
            let counter=new Array(26).fill(0)
            for(let char of ele){
                counter[char.charCodeAt(0)-'a'.charCodeAt(0)]++
            }
            const key= counter.join('_')
            if(!obj[key]){
                obj[key]=[]
            }
            obj[key].push(ele)
          }
          return Object.values(obj)
    }
}
