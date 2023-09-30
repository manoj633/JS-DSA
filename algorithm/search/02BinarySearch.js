/**
 * Problem Statement:
 * Implement a binary search algorithm to find the index of a target element in a sorted array.
 * If the target element is not in the array, return -1.
 *
 * Definition:
 * Binary search is a divide-and-conquer algorithm that efficiently locates a target element
 * in a sorted array by repeatedly dividing the search interval in half.
 *
 * Sample Input and Output:
 * Input: [1, 3, 5, 7, 9, 11], target = 7
 * Output: 3 (The element 7 is found at index 3 in the array)
 *
 * Input: [2, 4, 6, 8, 10], target = 5
 * Output: -1 (The element 5 is not in the array)
 *
 * Time Complexity:
 * The time complexity of binary search is O(log n), where 'n' is the number of elements in the sorted array.
 * This algorithm repeatedly divides the search range in half, reducing the number of remaining elements
 * to search with each iteration. As a result, it is very efficient, especially for large arrays.
 */
function binarySearch(array, element) {
  let mid, start, end;

  mid = array.length / 2;
  if (array[mid] === element) {
    return mid;
  } else if (array[mid] > element) {
    start = mid + 1;
    end = array.length - 1;
  } else if (array[mid] < element) {
    start = 0;
    end = mid - 1;
  }
}
