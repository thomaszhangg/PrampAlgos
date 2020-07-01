// Naive Solution
// We could loop through both input arrays and check the intersection of every pair slows to find an over of atleast dur seconds
// This would yield a time complexity of O(N*M)

// Since we are given slots sorted by its start time, we can iterate over both arrays in a single loop
// We use 2 pointers, one for each array, and follow rules on what to do
// 1) If there is a minimal overlap of dur between 2 given time slows, we just return [start, start + dur], start being the start time of the overlap
// 2) If overlap is less than dur, we increment the index of the array with the earlier end time slow 