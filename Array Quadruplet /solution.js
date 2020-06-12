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
let input = [2, 7, 4, 0, 9, 5, 1, 3]    // [0, 4, 7, 9] 
console.log('This output should equal [0, 4, 7 ,9]', findArrayQuadruplet(input, 20))