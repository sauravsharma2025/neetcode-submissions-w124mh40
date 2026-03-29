/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        const result=[[p,q]]
        while(result.length>0){
            let [node1,node2]=result.shift()
            if(!node1 && !node2)continue
            if(!node1 || !node2) return false
            if(node1.val!==node2.val)return false
            result.push([node1.left,node2.left])
            result.push([node1.right,node2.right])
        }
return true
    }
}
