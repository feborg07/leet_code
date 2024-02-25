// My solution

function isPalindrome(x: number): boolean {
    
  // Create a 2-pointer loop and return true if pointer 1 is greater or equal pointer 2
  // return false if the array elements of the pointers are different
  // Complexity O(n)

  // Transform number to string
  const xStr = x.toString();

  // Loop over xStr
  for (let p1 = 0, p2 = xStr.length - 1; p1 < p2; p1++, p2--)
  {
      if (xStr[p1] !== xStr[p2])
      {
          return false;
      }
  }

  return true
};

console.log(isPalindrome(101));