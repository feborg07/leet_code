/**
 * This is by far the best solution and it's so simple and at the same time so efficient
 */
function twoSumV3(nums: number[], target: number): number[] 
{
    // Create an object (hash table);
    const map: Record<number, number> = {};

    // Loop through the nums array
    for (let i = 0; i < nums.length; i++)
    {
        // creates a num variable for readability
        let num = nums[i];

        // Check if there is a key num in map {}
        if (map[num] === undefined)
        { 
            // if there's not an entry, create an entry subtracting num from target
            // (target - num) is the correct answer to check for next iterations
            // so here I'm saving the "possible" correct answer for the next numbers on the nums array
            map[target - num] = i;
        }
        else
        {
            // if there's an entry, that's the answer
            return [map[num], i];
        }
    }

    return [-1, -1];
};

console.log(twoSumV3([-3,4,3,90], 0));
