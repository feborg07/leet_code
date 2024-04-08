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

function isSymmetric(root: TreeNode | null): boolean 
{
    const result: string[] = [];

    function helper (root: TreeNode | null, side: string): void
    {
        if (!root) return;
        // Create a string with value and side
        helper(root.right, "R_");
        result.push("" + side + root.val);
        helper(root.left, "L_");
    }
    
    // Center node
    helper(root, "C_");
    console.log(result);
    // Loop through result
    for (let p1=0, p2=result.length - 1; p1 < p2; p1++, p2--)
    {
        // Check if it's opposite sides
        if (result[p1].split("_")[0] === result[p2].split("_")[0]) return false;
        // Check if value is the same
        if (result[p1].split("_")[1] !== result[p2].split("_")[1]) return false;
    }
    return true;
};

const root = 
    new TreeNode(1, 
    new TreeNode(2, null, new TreeNode(3)), 
    new TreeNode(2,new TreeNode(3)));
const test = isSymmetric(root);
console.log(test);

//r-null, r-2, l-null, l-2, 