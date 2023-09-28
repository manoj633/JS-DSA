//Brute force method
function powerOfTwo(n) {
  let i = 1;

  while (2 ** i <= n) {
    if (2 ** i == n) {
      return "Power of Two";
    }
    i++;
  }
  return "Not a power of two";
}

// console.log(powerOfTwo(15));

/*
Problem Statement:
You are given an integer number. Write a JavaScript function to determine if it is a power of two.

Definition:
A number is considered a power of two if it can be expressed as 2^k for some integer k. In other words, it has only one bit set in its binary representation.

Sample Input and Output:
- Input: 4
  Output: true
  Explanation: 4 is 2^2.

- Input: 16
  Output: true
  Explanation: 16 is 2^4.

- Input: 7
  Output: false
  Explanation: 7 is not a power of two.

Time Complexity:
The time complexity of this algorithm is O(1), which means it has constant time complexity. This is because the algorithm involves a simple bitwise operation to check if only one bit is set in the binary representation of the number, and the number of bits in the binary representation is fixed for integers.
*/
function isPowerOfTwo(number) {
  // Check if the number has only one bit set (i.e., it is a power of two)
  return number > 0 && (number & (number - 1)) === 0;
}

console.log(isPowerOfTwo(5));

/**
 * Condition (number > 0): This is the first part of the return statement's condition. It checks whether the input number is greater than 0. This condition ensures that we are only considering positive integers, as negative numbers and zero cannot be powers of two.
 * Bitwise Operation (number & (number - 1)) === 0: This is the core of the algorithm. It checks if the input number has only one bit set, which is a characteristic of powers of two.
 * (number - 1): Subtracting 1 from a binary number results in flipping all the bits from the rightmost set bit to the end. For example, if number is 8 (binary: 1000), then (number - 1) is 7 (binary: 0111).
 * number & (number - 1): Performing a bitwise AND operation between number and (number - 1) will result in all bits being zero if and only if number has only one bit set. In other words, if number is a power of two, this operation will yield zero.
 */
