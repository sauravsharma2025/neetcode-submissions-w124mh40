class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(ops) {
        const arr=[]
        for(let ele=0;ele<ops.length;ele++){
            if(ops[ele]==='+'){
               const n=arr.length
                arr.push(arr[n-1]+arr[n-2])
            }else if( ops[ele]==='C'){
                arr.pop()
            }else if(ops[ele]==='D'){
                    arr.push(arr[arr.length - 1]*2)
            }else{
                arr.push(Number(ops[ele]))
            }
        }
   return arr.reduce((acc,curr)=>(acc)+(curr),0)
    }
}
