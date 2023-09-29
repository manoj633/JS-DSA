/*
Problem Statement:
Calculate the factorial of a non-negative integer n using a recursive approach.

Definition:
The factorial of a non-negative integer n, denoted as n!, is the product of all positive integers from 1 to n. It is defined as:
n! = 1 * 2 * 3 * ... * n

Sample Input:
Input: 5
Output: 120
Explanation: The factorial of 5 is calculated as 5! = 5 * 4 * 3 * 2 * 1 = 120.

Time Complexity:
The time complexity of calculating factorial recursively is O(n), where n is the input integer. This is because the recursive function makes n recursive calls, and each call involves a constant amount of work.
*/
function Factorial(n) {
  let res;
  if (n == 0 || n == 1) return 1;
  return n * Factorial(n - 1);
}

console.log(Factorial(5));
