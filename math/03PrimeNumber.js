/*
Problem Statement:
-----------------
Write a JavaScript function to determine whether a given number is prime or not.

Definition:
-----------
A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. In other words, a prime number is a number that is divisible by only 1 and itself.

Sample Input and Output:
-------------------------
Input: 5
Output: true
Explanation: 5 is a prime number because it is only divisible by 1 and 5.

Input: 8
Output: false
Explanation: 8 is not a prime number because it is divisible by 1, 2, 4, and 8.

Time Complexity:
----------------
The time complexity of the algorithm to check whether a number is prime can be analyzed as follows:
- We can iterate from 2 to the square root of the input number.
- For each iteration, we perform a modulus operation to check if the input number is divisible by the current iteration value.
- Therefore, the time complexity is O(sqrt(n)), where 'n' is the input number.

 */

function checkPrimality(number) {
  let res = "Prime number";

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      res = "Not a Prime number";
    }
  }
  console.log(res);
}

checkPrimality(5);
