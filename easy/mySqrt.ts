function mySqrt (x: number): number
{
    // Implemented the long division algorithm
    // STEP 1: divide the number into pairs
    const xStr = x.toString(); // Convert number to string
    const xSorted: string[] = []; // Divide the number into pairs
    for (let i = 0; i < xStr.length; i += 2)
    {
        // If length is odd get the first number only
        if (xStr.length % 2 !== 0 && i === 0)
        {
            xSorted.push(xStr[0]);
            // reset i to the next pair
            i--;
        }
        else
        {
            xSorted.push(xStr[i] + xStr[i + 1]);
        }
    }

    // STEP 2: resolve the first number on the sorted array
    let result = "";

    for (let i = 0; i < 10; i++)
    {
        const firstNum = parseInt(xSorted[0]);
        if ((i * i) > firstNum)
        {
            result += "" + (i - 1);
            break;
        }
        if ((i * i) === firstNum || i === 9)
        {
            result += "" + i;
            break;
        }
    }

    // STEP3: Go through the rest of the long division steps
    // Start remainder value
    let remainder = parseInt(xSorted[0]) - (parseInt(result) * parseInt(result));
    // Start addition value
    let addition = parseInt(result) * 2;
    // Access number on xSorted array
    let count = 1;

    while (count < xSorted.length)
    {
        // Concatenate remainder with other pair
        let concat = parseInt("" + remainder + xSorted[count]);
        // Loop through 0 to 9 to find the box number
        console.log(xSorted, result, remainder, addition, concat)
        for (let i = 0; i < 10; i++)
        {
            let addAndBoxConcat = parseInt("" + addition + i) * i;

            if (addAndBoxConcat > concat)
            {
                result += "" + (i - 1);
                // You have to get the previous value of addAndBoxConcat number
                remainder = concat - parseInt("" + addition + (i - 1)) * (i - 1);
                addition = parseInt("" + addition + (i - 1)) + (i - 1);
                break;
            }
            if (addAndBoxConcat === concat || i === 9)
            {
                result += "" + i;
                remainder = concat - addAndBoxConcat;
                addition = parseInt("" + addition + i) + i;
                break;
            }
        }

        count++;
    }

    return parseInt(result);
}

// const test = mySqrt(9);
const test = mySqrt(88550073);
console.log(test);



/**
 69. Sqrt(x)
Easy
Topics
Companies
Hint
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 

Example 1:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
 

Constraints:

0 <= x <= 231 - 1
 */