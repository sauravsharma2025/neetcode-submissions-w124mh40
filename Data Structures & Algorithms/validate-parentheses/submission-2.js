class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
      //   const stack=[]
      //  const mapper={
      //   "(":")",
      //   "[":"]",
      //   "{":"}"
      //  }

      //   for(let i=0;i<s.length;i++){
            
      //     if(mapper[s[i]]){
      //       stack.push(s[i])
      //     }else{
      //       const lastOpener=stack.pop()
      //       if(mapper[lastOpener]!==s[i])return false
      //     }
            
      //   }
      //   return stack.length===0?true:false

      const map={
        ")":"(",
        "]":"[",
        "}":"{"
      }
      const stack=[]
      const splittedArr=s.split('')
      for(let ele of splittedArr){
        if(map[ele]){
          if(stack.pop()!==map[ele])return false

        }else{
          stack.push(ele)
        }
      }
      return stack.length===0?true:false





    }
}
