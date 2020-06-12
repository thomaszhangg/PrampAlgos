// A naive, brute force approach would be to consider every single possible quadruplet in the given array
// This would require 4 nested loops and result in a time complexity of O(N^4)
// A better approach we can take is to start by sorting the given array in ascending order, this'll ensure we return the first valid array
// Our first 2 loops will (arr[i] + arr[j]). We can then subtract it from sum and check j+1 through end of the array for 2 numbers that add up to that remaining sum
// We use a 2 pointer approach start and end. 
// If arr[start] + arr[end] is greater than remaining sum, we 

function findArrayQuadruplet(arr, s) {
  arr.sort((a, b) => a - b);
  let results = [];

  for (let i = 0; i < arr.length - 3; i++) {
    for (let j = i + 1; j < arr.length - 2; j++) {
      let remainingSum = s - (arr[i] + arr[j]);

      let start = j + 1;
      let end = arr.length - 1;

      while (start < end) {
        if (arr[start] + arr[end] > remainingSum) {
          end--;
        } else if (arr[start] + arr[end] < remainingSum) {
          start++;
        } else {
          // found 2 numbers = remainingSum
          return [arr[i], arr[j], arr[start], arr[end]];
        }
      }
    }
  }
  return results;
}

// Test
let input = [2, 7, 4, 0, 9, 5, 1, 3]; // [0, 4, 7, 9]
console.log(
  'This output should equal [0, 4, 7 ,9]',
  findArrayQuadruplet(input, 20)
);
