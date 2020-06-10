// The naive approach is to iterate over the entire array and return index i once we find that arr[i] === i
// This would rsult in linear time complexity O(N). We can take advantage of the fact that the arr is sorted
// We can optimize for a O(log(N)) solution using a binary search with a slight modification (
// The array indicies are strictly monotonically increasing sequences (sorted & ascending)

function indexEqualsValueSearch(arr) {
    let left = 0;
    let right = arr.length - 1
    
    while (left <= right) {
      let mid = Math.floor(left + (right - left)/2)
      
      if (mid === arr[mid]) {
        return mid
      } else if (mid > arr[mid]) {    // index too big, everything before must also be too big
        left = mid + 1
      } else {          // mid < arr[mid] 
        right = mid - 1
      }
    }
    return -1
  }


  