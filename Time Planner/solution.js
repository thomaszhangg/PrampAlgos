// Naive Solution
// We could loop through both input arrays and check the intersection of every pair slows to find an over of atleast dur seconds
// This would yield a time complexity of O(N*M)

// Since we are given slots sorted by its start time, we can iterate over both arrays in a single loop
// We use 2 pointers, one for each array, and follow rules on what to do
// 1) If there is a minimal overlap of dur between 2 given time slows, we just return [start, start + dur], start being the start time of the overlap
// 2) If overlap is less than dur, we increment the index of the array with the earlier end time slow 

function meetingPlanner(slotsA, slotsB, dur) {
    let aPointer = 0
    let bPointer = 0
    
    while (aPointer < slotsA.length && bPointer < slotsB.length) {
      // overlap interval [maxStarts, minEnds]
      let start = Math.max(slotsA[aPointer][0], slotsB[bPointer][0])
      let end = Math.min(slotsA[aPointer][1], slotsB[bPointer][1])
      
      // if interval is big enough, we have an answer
      if (end - start >= dur) return [start, start + dur]
      
      // if not big enough, decide which pointer to increment
      else {
        // we want to increment the pointer with the SMALLER interval END
        // bc we have not fully explored the interval with LARGER interval END 
        // ^ we may still use this interval in next iteration
        if (slotsA[aPointer][1] > slotsB[bPointer][1]) {
          bPointer++
        } else {
          aPointer++
        }
      }
    }
    // we've fully traversed one of the slots, so we can conclude
    // there is no open time slow for both to meet
    return []
  }

  //