// If we run a selection sort, the time complexity would be O(N^2)
// If we use JavaScript's built in sort function with a custom comparator

const absSort = (arr) => {
    return arr.sort((a,b) => {
      if (Math.abs(a) > Math.abs(b)) return 1
      else if (Math.abs(a) < Math.abs(b)) return -1
      else {
        if (a > b) return 1
      }
    })
  }