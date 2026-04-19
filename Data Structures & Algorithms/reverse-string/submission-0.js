class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(arr) {
        let left=0
        let right=arr.length-1
        while(left<right){
            [arr[left],arr[right]]=[arr[right],arr[left]]
            left++
            right--
        }
        return arr
    }
}
