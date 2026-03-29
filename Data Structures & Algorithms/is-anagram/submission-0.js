class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!==t.length)return false
        const frequencyArr=new Array(26).fill(0)
        for(let i=0;i<s.length;i++){
            frequencyArr[s.charCodeAt(i)-97]++
            frequencyArr[t.charCodeAt(i)-97]--
        }
        for(let ele of frequencyArr){
            if(ele!==0)return false
        }
        return true
    }
}
