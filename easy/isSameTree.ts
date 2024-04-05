// Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean 
{
    // Edge case if both trees has no nodes (?)
    if (!p && !q) return true;
    
    if (p && q) {
        // Creates a frontier (stack) for both trees from which visited nodes will be popped
        const frontierP: TreeNode[] = [p];
        const frontierQ: TreeNode[] = [q];

        while (frontierP.length)
        {
            // Pop from stack and save nodes in a variable
            let visitedP = frontierP.pop();
            let visitedQ = frontierQ.pop();

            // Check if left and right are present and if value is the same in both trees
            if (visitedP!.val !== visitedQ!.val) return false;
            if (!visitedP!.left && visitedQ!.left) return false;
            if (visitedP!.left && !visitedQ!.left) return false;
            if (!visitedP!.right && visitedQ!.right) return false;
            if (visitedP!.right && !visitedQ!.right) return false;
            // Push nodes to frontiers
            if (visitedP!.left) frontierP.push(visitedP!.left);
            if (visitedP!.right) frontierP.push(visitedP!.right);
            if (visitedQ!.left) frontierQ.push(visitedQ!.left);
            if (visitedQ!.right) frontierQ.push(visitedQ!.right);
        }
    }
    else
    {
        return false;
    }

    return true;
};



/**
 * 100. Same Tree
Easy
Topics
Companies
Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

 

Example 1:


Input: p = [1,2,3], q = [1,2,3]
Output: true
Example 2:


Input: p = [1,2], q = [1,null,2]
Output: false
Example 3:


Input: p = [1,2,1], q = [1,1,2]
Output: false
 

Constraints:

The number of nodes in both trees is in the range [0, 100].
-104 <= Node.val <= 104
 */