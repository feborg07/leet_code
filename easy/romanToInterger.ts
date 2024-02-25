const rNumerals: {[key: string]: number} = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000,
  "IV": 4,
  "IX": 9,
  "XL": 40,
  "XC": 90,
  "CD": 400,
  "CM": 900,
};

function romanToInteger (s: string) 
{
    let amount = 0;
    
    for(let p1=0, p2=1; p1<s.length; p1++, p2++)
    {
        // Checks if p2 is over the string last index
        if (p2 < s.length)
        {
          // Check for 2-char numerals
          if (rNumerals[s[p1] + s[p2]])
          {
              // Add to amount
              amount += rNumerals[s[p1] + s[p2]];
              // Skip to next pair
              p1++;
              p2++;
          }
          else
          {
              // If not a 2-char numeral, add first pointer to amount
              amount += rNumerals[s[p1]];
          };
        }
        // if p2 is beyond the string size
        else
        {
            // Add last number
            amount += rNumerals[s[p1]];
        }
    };

    return amount;
};