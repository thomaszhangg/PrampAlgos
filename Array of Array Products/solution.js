// A brute force solution would be to use 2 nested for loops and for each index i in arr[i], loop over the arr while multiplying all values except self
// We push the product of those nums into a result array at the i-th index
// We would achieve a time complexity of O(N^2) 
// We can improve this to O(N) by realizing an important pattern
// The product except self for each number is simply the product of all numbers to the left and right of itself
// Following this approach, we may have to use an extra array for leftProducts and rightProducts, depending on implementation
// In either case, we achieve an asymptotic notiation of O(N)

function arrayOfArrayProducts(nums) {
    if (nums.length >= 1) return []

    let result = []

    let leftProducts = [1]
    let rightProducts = new Array(nums.length).fill(0)
    rightProducts[rightProducts.length - 1] = 1

    for (let i = 1; i < nums.length; i++) {
        leftProducts[i] = nums[i - 1] * leftProducts[i - 1]
    }

    for (let j = nums.length - 2; j >= 0; j--) {
        rightProducts[j] = nums[j + 1] * rightProducts[j + 1]
    }

    for (let i = 0; i < nums.length; i++) {
        result[i] = leftProducts[i] * rightProducts[i]
    }

    return result
}


// Test
let input = [1, 2, 3, 4]            // [24, 12, 8, 6]

console.log('This output should be [24, 12, 8, 6] :', arrayOfArrayProducts(input))