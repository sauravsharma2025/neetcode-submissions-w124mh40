class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack=[]
       const mapper={
        "(":")",
        "[":"]",
        "{":"}"
       }

        for(let i=0;i<s.length;i++){
            
          if(mapper[s[i]]){
            stack.push(s[i])
          }else{
            const lastOpener=stack.pop()
            if(mapper[lastOpener]!==s[i])return false
          }
            
        }
        return stack.length===0?true:false
    }
}
