/*
 * Problem Statement:
 * Write a JavaScript function to calculate the Fibonacci series up to the nth term.
 *
 * Definition:
 * The Fibonacci series is a sequence of numbers in which each number is the sum of the two preceding ones.
 * The series starts with 0 and 1, and the subsequent numbers are formed by adding the last two numbers in the series.
 *
 * Sample Input:
 * Input: n = 5
 *
 * Sample Output:
 * Output: [0, 1, 1, 2, 3]
 *
 * Time complexity: O(n)
 */

function Fibonacci(n) {
  let x = [0, 1];

  for (let i = 2; i < n; i++) {
    x[i] = x[i - 2] + x[i - 1];
  }
  console.log(x);
}

Fibonacci(5);
