/**
    14. Longest Common Prefix
    Easy Topics Companies

    Write a function to find the longest common prefix string amongst an array of strings.

    If there is no common prefix, return an empty string "".

    Example 1:

    Input: strs = ["flower","flow","flight"]
    Output: "fl"
    Example 2:

    Input: strs = ["dog","racecar","car"]
    Output: ""
    Explanation: There is no common prefix among the input strings.

    Constraints:

    1 <= strs.length <= 200
    0 <= strs[i].length <= 200
    strs[i] consists of only lowercase English letters.
 */

function longestCommonPrefix(strs: string[]): string {
  
  // Common chars
  // Push all chars of first word as first reference
  let prefix:string[] = strs[0].split("");

  // Start loop on the second word
  for (let i = 1; i < strs.length; i++)
  {
      // Break if prefix is empty
      if (prefix.length <= 0) break;

      // Loop over the current word and modify prefix if necessary
      for (let c = 0; c < prefix.length; c++)
      {
          if (strs[i][c] !== prefix[c])
          {
              prefix.splice(c);
              break;
          }
      }
          
  }

  return prefix.join("");

};

longestCommonPrefix(["car", "racecar", "dog"]);
longestCommonPrefix(["flower", "flow", "flight"]);