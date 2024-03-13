function addBinary(a: string, b: string): string
{
    let result = "";
    let carry = "0";
    let p1 = a.length - 1;
    let p2 = b.length - 1;

    while (p1 >= 0 || p2 >= 0)
    {
        let numA = p1 >= 0 ? a[p1] : "0";
        let numB = p2 >= 0 ? b[p2] : "0";
        let addGroup = numA + numB + carry;
        // Possible combinations: 000, 111, 011 (101, 110), 001 (010, 100)
        switch (addGroup)
        {
            case "000":
                result = "0" + result;
                carry = "0";
                break;
            case "111":
                result = "1" + result;
                carry = "1";
                break;
            case "011":
            case "101":
            case "110":
                result = "0" + result;
                carry = "1";
                break;
            case "001":
            case "010":
            case "100":
                result = "1" + result;
                carry = "0";
                break;
        }

        p1--;
        p2--;
    }

    if (carry === "1") result = "1" + result;

    return result;
}

const test = addBinary("1010", "1011");
console.log(test);

/**
 67. Add Binary
Easy
Topics
Companies
Given two binary strings a and b, return their sum as a binary string.

 

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
 

Constraints:

1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.
 */