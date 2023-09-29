/*
Problem Statement:
Calculate the nth Fibonacci number using a recursive approach.

Definition:
The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1. In mathematical terms:
F(0) = 0
F(1) = 1
F(n) = F(n-1) + F(n-2) for n > 1
/*
Problem Statement:
Calculate the Fibonacci sequence up to the nth term using a recursive algorithm.

Definition:
The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1. Mathematically, it can be defined as follows:
F(0) = 0
F(1) = 1
F(n) = F(n-1) + F(n-2) for n > 1

Sample Input and Output:
Input: 5
Output: The Fibonacci sequence up to the 5th term is [0, 1, 1, 2, 3]

Time Complexity:
The time complexity of this recursive Fibonacci algorithm is exponential, O(2^n), where 'n' is the term you want to calculate. This is because for each Fibonacci term, the function makes two recursive calls, resulting in an exponential growth in the number of function calls. As a result, the algorithm becomes inefficient for large values of 'n' and should be avoided for such cases in favor of more efficient methods like dynamic programming.
*/

function recursiveFibonacci(n) {
  if (n === 0) {
    return [0];
  } else if (n === 1) {
    return [0, 1];
  } else {
    const previousSequence = recursiveFibonacci(n - 1);
    const nextTerm =
      previousSequence[previousSequence.length - 1] +
      previousSequence[previousSequence.length - 2];
    previousSequence.push(nextTerm);
    return previousSequence;
  }
}

const n = 5;
const fibonacciSequence = recursiveFibonacci(n);
console.log(fibonacciSequence);
