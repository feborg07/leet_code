function isValid(s: string): boolean 
{
    // Edge case
    if (s.length % 2 !== 0) return false;

    // Create an array for opening symbols
    const opening: string[]= [];

    // "Map" closing symbols to their counterpart opening symbols
    const closing: {[key: string]: string} = {")": "(", "]": "[", "}": "{"};

    // Loop over the string
    for (let i=0; i < s.length; i++)
    {
        // If it's a closing symbol, 
        if (closing[s[i]])
        {
            // If last element in opening is the opposite symbol, pop it from the array. Else return false
            if (opening[opening.length - 1] === closing[s[i]])
            {
                opening.pop()
            }
            else
            {
                return false;
            }
        }
        else
        {
            // This will always add an opening symbol
            opening.push(s[i])
        }
    }

    return opening.length === 0;
};

console.log(isValid("((()))"))