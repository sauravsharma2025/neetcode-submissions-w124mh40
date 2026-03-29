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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        if(!root)return ""
        const queue=[root]
        const result=[]
        while(queue.length){
            let node=queue.shift();
            if(node){
                result.push(node.val)
                queue.push(node.left)
                queue.push(node.right)
            }else{
                result.push("null")
            }
        }
        return result.join(",")
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        if(!data)return null
        let values=data.split(",")
        let root=new TreeNode(parseInt(values[0]))
        let queue=[root]
        let i=1
        while(queue.length){
            let node=queue.shift()
            if(values[i]!=="null"){
                node.left=new TreeNode(parseInt(values[i]))
                queue.push(node.left)
            }
            i++;
            if(values[i]!=="null"){
                node.right=new TreeNode(parseInt(values[i]))
                queue.push(node.right)
            }
            i++;
        }
return root

    }
}
