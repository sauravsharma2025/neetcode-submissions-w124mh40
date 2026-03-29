/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if(lists.length==0 || !lists) return null

        const values=[]
        for(let ele of lists){
            while(ele){
                values.push(ele.val)
                ele=ele.next
            }
        }
    //sort value
    values.sort((a,b)=>a-b)

    let dummy=new ListNode(0)
    let current=dummy
    for(let val of values){
        current.next=new ListNode(val)
        current=current.next
    }








return dummy.next



    }
}
