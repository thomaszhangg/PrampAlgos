// We can solve this using selection sort with a custom comparison function. We could use 2 for loops to find the smallest number and continuously swapping it to the front of the array
// This brute force solution would take O(N^2) time complexity and we can do better

// JavaScript's built in sort function uses insertion sort for short arrays and quick sort for longer arrays.
// Typically running in O(N log(N)) time
// .sort accepts an optional callback that takes 2 paramaters and returns either a negative, positive, or 0
// The 2 parameters are the 2 elements of the array being compared
// If the return value is NEGATIVE, the first parameter will be inserted FIRST
// If the return value is POSITIVE, the second parameter will be inserted FIRST
// If the return value is 0, they are equal and we can customize this part as well

const absSort = (arr) => {
    return arr.sort((a,b) => {
      if (Math.abs(a) > Math.abs(b)) return 1
      else if (Math.abs(a) < Math.abs(b)) return -1
      else {
        if (a > b) return 1
      }
    })
  }

  