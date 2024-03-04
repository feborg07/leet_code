// My solution

function twoSum(nums: number[], target: number): number[] {
  let x: number = 0
  let y: number = 0

  for (let i = 0; i < nums.length; i++)
  {
      for (let j = i + 1; j < nums.length; j++)
      {   
        if (nums[i] + nums[j] === target)
        {
              x = i;
              y = j;
              return [x, y];
          }
      }
  }

  throw new Error(`No values in the array add up to ${target}`);

};

twoSum([-3,4,3,90], 0);
