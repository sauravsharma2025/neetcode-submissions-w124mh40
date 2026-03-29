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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        const map=new Map()
        for(let i=0;i<inorder.length;i++){
            map.set(inorder[i],i)
        }

        let preorderIndex=0
        function helper(left,right){
            if(left>right)return null
            const rootVal=preorder[preorderIndex++]
            const root=new TreeNode(rootVal)
            const mid=map.get(rootVal)
            root.left=helper(left,mid-1)
            root.right=helper(mid+1,right)
            return root
        }
        return helper(0,inorder.length-1)
    }
}
