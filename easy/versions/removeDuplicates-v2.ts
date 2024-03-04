function removeDuplicates (nums: (number | "_")[]): number
{
    let k = 0;

    // Create a object to act as a counterMap
    const counterMap = new Map<number, number>();

    // Loop over and set counterMap
    for (let i = 0; i < nums.length; i++)
    {
        let el = nums[i] as number;
        if (counterMap.has(el))
        {
            counterMap.set(el, counterMap.get(el)! + 1);
        }
        else
        {
            counterMap.set(el, 0)
        }
    }

    const counterKeys = Array.from(counterMap.keys());

    for (let i = 0; i < nums.length; i++)
    {
        if (i < counterKeys.length)
        {
            nums[i] = counterKeys[i];
            k++;
        }
        else
        {
            nums[i] = "_";
        }
    }


    console.log(nums)
    return k;
}

const test = removeDuplicates([-3,-1,0,0,0,3,3]);
console.log(test);