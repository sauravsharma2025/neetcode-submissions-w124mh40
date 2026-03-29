class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(s.length===0 || t.length===0)return ""

        const tMap=new Map()
        for(let ele of t){
            tMap.set(ele,(tMap.get(ele)||0)+1)
        }
        let left=0
        let right=0
        let formed=0
        const windowMap=new Map()
        const required=tMap.size

        let minLen=Infinity
        let minStart=0
        while(right<s.length){
            const char=s[right]
            windowMap.set(char,(windowMap.get(char)||0)+1)
            
            if(tMap.has(char)&& windowMap.get(char)===tMap.get(char)){
                formed++
            }
            while(left<=right && formed===required){
                if(right-left+1<minLen){
                    minLen=right-left+1
                    minStart=left
                }
                const leftChar=s[left]
                windowMap.set(leftChar,windowMap.get(leftChar)-1)

                if(tMap.has(leftChar)&& windowMap.get(leftChar)<tMap.get(leftChar)){
                    formed--
                }
                left++

            }
            right++

        }
        return minLen===Infinity?"":s.substring(minStart,minStart+minLen)

    }
}
