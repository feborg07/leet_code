
// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null 
{
    // Edge case
    if (!list1 && !list2) return null;
    if (list1 && !list2) return list1;
    if (list2 && !list1) return list2;

    // Create new list
    const newList = new ListNode();
    
    let newNode = newList;
    
    // Loop over list and push
    while (list1 && list2)
    {
        // Check if lists are available
        if (list1 && list2)
        {
            // Check node value
            if (list1.val < list2.val)
            {
                newNode.next = list1;
                list1 = list1.next
            }
            else if (list2.val < list1.val)
            {
                newNode.next = list2;
                list2 = list2.next;
            }
            else
            {
                newNode.next = list1;
                list1 = list1.next;
                // Advance newNode for first operation
                newNode = newNode.next;
                newNode.next = list2;
                list2 = list2.next;
            }

            // Advance newNode
            newNode = newNode.next;
        }

        // Check if there are more numbers in any of the lists
        if (list1) newNode.next = list1;
        if (list2) newNode.next = list2;
    }

    return newList.next;
};

const list1 = new ListNode(1, new ListNode(2, new ListNode(4, new ListNode(7, new ListNode(8, null)))));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4, null)));

const finalList = mergeTwoLists(list1, list2);

// Print list
for (let i = finalList; i !== null; i = i.next)
{
    console.log(i.val);
}