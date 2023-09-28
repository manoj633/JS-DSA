/**
 * Problem Statement:
 * Write a JavaScript function to calculate the factorial of a given non-negative integer 'n'. The factorial of a non-negative integer 'n' is the product of all positive integers less than or equal to 'n'. For example, the factorial of 5 (denoted as 5!) is 5 * 4 * 3 * 2 * 1 = 120.
 *
 * Function Signature:
 * function calculateFactorial(n)
 *
 * Input:
 * - A non-negative integer 'n' (0 <= n <= 20)
 *
 * Output:
 * - The factorial of 'n'.
 *
 * Example:
 *
 * Input:
 * calculateFactorial(5);
 *
 * Output:
 * 120
 *
 * Explanation:
 * The factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
 * Therefore, the function should return 120 when called with an input of 5.
 */

function calculateFactorial(n) {
  let res = n;
  for (let i = n; i > 1; i--) {
    res = res * (i - 1);
  }
  console.log(res);
}

calculateFactorial(5);
