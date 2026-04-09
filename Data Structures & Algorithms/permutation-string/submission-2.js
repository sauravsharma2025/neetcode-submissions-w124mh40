class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
      if(s1.length>s2.length)return false
      let count1=new Array(26).fill(0)
      let count2=new Array(26).fill(0)
      for(let i=0;i<s1.length;i++){
        count1[s1.charCodeAt(i)-97]++
        count2[s2.charCodeAt(i)-97]++
      }
      const matches=()=>{
        for(let i=0;i<26;i++){
            if(count1[i]!==count2[i])return false
        }
        return true;
      }
      if(matches())return true

      for(let i=s1.length;i<s2.length;i++){
        count2[s2.charCodeAt(i)-97]++
        count2[s2.charCodeAt(i-s1.length)-97]--
        if(matches())return true
      }
      return false
    }
}
