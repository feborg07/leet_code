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

// This is more a preorder traversal than a inorder traversal, I guess
function inorderTraversal(root: TreeNode | null): number[] {
    
    const result: number[] = [];

    // I had to use a helper function bc of the way LeetCode works.
    // It seems to save the variable value in a cache if the variable is outside the function
    function pushToResult (root: TreeNode | null): void
    {
        if (root === null) return;
    
        pushToResult(root.left);
        result.push(root.val);
        pushToResult(root.right);
    }

    pushToResult(root);
    
    return result;
};

// const tree = null;
const tree = new TreeNode(1, null, new TreeNode(2, new TreeNode(3,null, null), null));
const test = inorderTraversal(tree);
console.log("return:", test);

/**
 * 94. Binary Tree Inorder Traversal
Easy
Topics
Companies
Given the root of a binary tree, return the inorder traversal of its nodes' values.

 

Example 1:


Input: root = [1,null,2,3]
Output: [1,3,2]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]
 

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
 

Follow up: Recursive solution is trivial, could you do it iteratively?
 */