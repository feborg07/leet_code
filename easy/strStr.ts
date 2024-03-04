function strStr(haystack: string, needle: string): number
{

    let index = -1

    // Loop over haystack
    for (let i = 0; i < haystack.length; i++)
    {
        // Check if i index is equal to needle first char
        if (haystack[i] === needle[0])
        {
          // Assign i to index
          index = i;
            // Loop over needle
            for (let j = 0; j < needle.length; j++)
            {
                // Check if the characters are equal
                if (haystack[i] !==  needle[j])
                {
                    // Reset i to the previous position, index to -1 and break
                    i = index;
                    index = -1;
                    break;
                }
                // If it's the last char on needle return index;
                if (j === needle.length - 1) return index;
                // Add 1 to i
                ++i;
            }
        }
    }

    return -1;
}

const test = strStr("mississippi", "issip");
console.log(test);