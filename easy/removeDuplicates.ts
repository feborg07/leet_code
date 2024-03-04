function removeDuplicates (nums: number[]): number
{
    // Edge case
    if(nums.length < 2) return nums.length;

    let k = 0;
    
    for (let i = 1; i < nums.length; i++)
    {
        if (nums[k] !== nums[i])
        {
            ++k;
            nums[k] = nums[i];
        }
    }

    return ++k;
}

const test = removeDuplicates([-3,-1,0,0,0,3,3]);
console.log(test);