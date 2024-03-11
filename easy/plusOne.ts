function plusOne(digits: number[]): number[]
{
    const l = digits.length;

    // Edge case
    if (digits[l - 1] !== 9)
    {
        digits[l - 1] += 1;
        return digits;
    }

    // Last digit is 9
    for (let i = l - 1; i >= 0; i--)
    {
        if (digits[i] === 9)
        {
            digits[i] = 0;
            // If adding 1 changes the scale of magnitude
            if (i === 0)
            {
                // to avoid using unshift which takes more time
                digits[i] = 1;
                digits.push(0);
                break;
            }
        }
        else
        {
            // Number is not 9
            digits[i] += 1;
            break;
        }
    }

    return digits;
}

const test = plusOne([9,9,9,9]);
console.log(test);