/*
Problem Statement:
You are given an array of elements and a target value. Implement a linear search algorithm to find the index of the target value in the array. If the target value is not found in the array, return -1.

Definition:
Linear search, also known as sequential search, is a simple searching algorithm that searches for a target element in a list by examining each element one by one until a match is found or the entire list has been searched.

Sample Input and Output:
Input:
- Array of integers: [4, 2, 7, 1, 9, 3]
- Target value: 7

Output:
- Index of the target value: 2

Input:
- Array of strings: ["apple", "banana", "cherry", "date"]
- Target value: "grape"

Output:
- Target value not found, return -1

Time Complexity:
The time complexity of the linear search algorithm is O(n), where 'n' is the number of elements in the array. This is because, in the worst case, it may need to examine all 'n' elements in the array to find the target value or determine that it is not present.
*/

function elementFound(arr, ele) {
  let y = undefined;
  y = arr.filter((x) => x === ele);
  console.log(y.length > 0 ? "Found" : "Not Found");
}

const x = [1, 2, 3, 6, 7, 31, 4];
elementFound(x, 2);
