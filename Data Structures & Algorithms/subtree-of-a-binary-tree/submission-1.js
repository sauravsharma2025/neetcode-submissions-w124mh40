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
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        function isSameTree(t1,t2){
            if(!t1 && !t2) return true
            if(!t1 || !t2) return false
            if(t1.val!==t2.val) return false
            return isSameTree(t1.left,t2.left) && isSameTree(t1.right,t2.right)
        }

        if(!root)return false
        if(isSameTree(root,subRoot))return true
        return this.isSubtree(root.left,subRoot) || this.isSubtree(root.right,subRoot)
    }
}
