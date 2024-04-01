
// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function deleteDuplicates(head: ListNode | null): ListNode | null {
    // Create a flag to check for a duplicated value
    let isDuplicated = false;
    // Loop through List, if flag is false node = node.next else node = node
    for (let node = head; node; isDuplicated ? node = node : node = node.next)
    {
        // Find duplicate values
        if (node.next && node.val === node.next.val)
        {
            // Delete Duplicated Value and connect next.next node;
            node.next = node.next.next;
            isDuplicated = true;
        }
        else
        {
            isDuplicated = false;
        }
    }

    return head;
};




/**
83. Remove Duplicates from Sorted List
Easy
Topics
Companies
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

 

Example 1:


Input: head = [1,1,2]
Output: [1,2]
Example 2:


Input: head = [1,1,2,3,3]
Output: [1,2,3]
 

Constraints:

The number of nodes in the list is in the range [0, 300].
-100 <= Node.val <= 100
The list is guaranteed to be sorted in ascending order.
 */