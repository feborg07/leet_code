function twoSumV2(nums: number[], target: number): number[] 
{
    let numsObject:{[key: string]: number} = {};

    // Transform the array in an object ("hash table")
    for (let i = 0; i < nums.length; i++)
    {   
        let key = nums[i].toString();
        numsObject[key] = i;
    }

    // Check if correct value (target - nums[i]) is found
    for (let i = 0; i < nums.length; i++)
    {
        const checkValue = (target - nums[i]).toString();
        const objValue = numsObject[checkValue];

        if (objValue && objValue !== i)
        {
            console.log(i, objValue);
            return [i, objValue];
        }

    }

    // if value is not found
    return [-1, -1];
};

twoSumV2([-3,4,3,90], 0);
twoSumV2([3,3], 6);
twoSumV2([2,7,11,15], 9);
twoSumV2([1,3,4,2], 6);
