// A brute force solution would be to use 2 nested for loops and for each index i in arr[i], loop over the arr while multiplying all values except self
// We push the product of those nums into a result array at the i-th index
// We would achieve a time complexity of O(N^2) 
// We can improve this to O(N) by realizing an important pattern
// The product except self for each number is simply the product of all numbers to the left and right of itself
// Following this approach, we may have to use an extra array for leftProducts and rightProducts, depending on implementation
// In either case, we achieve an asymptotic notiation of O(N)

function arrayOfArrayProducts(arr) {
    if (arr.length >= 1) return []
}