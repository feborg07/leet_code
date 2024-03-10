function searchInsert(nums: number[], target: number): number
{
    // Edge cases
    if (target < nums[0]) return 0;
    if (target > nums[nums.length - 1]) return nums.length;

    let i = 0;
    let slice = 2;
    let prevIndex = i;

    while (target !== nums[i])
    {
        const half = Math.floor(nums.length / slice);

        if (target > nums[i])
        {
            i =  half + i;
            // If target not found
            if (prevIndex === i) return ++i; 
        }
        else
        {
            i =  Math.abs(half - i);
            // If target not found
            if (prevIndex === i) return i
        }

        slice += 2;
        prevIndex = i;
    }
    // If target found
    return i;
}

const test = searchInsert([1,3,5,6,8,9,12,55,66,489,587,697], 697);
console.log(test);

/**
 
Code
Testcase
Test Result
Test Result
35. Search Insert Position
Easy
Topics
Companies
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
 */