// Instead of traveling from bottom left to upper right, we can start from upper right and travel towards bottom left (0,0)
// More intuitive: lets start from destination (n-1, n-1) and try to reach 0,0
// We must still respect the diagonal line boundary.
// Using X, Y to represent the coordinates of our n x n grid, X must be >= Y (inbounds)
// AKA we cannot travel further down than left

// Without memoization, we are doing a lot of redundant calculations and will timeout given a large input
function numOfPathsToDest(n) {
  return findPath(n - 1, n - 1);
}

function findPath(x, y) {
  if (y > x || x < 0 || y < 0) return 0;
  // off the grid or crossed line
  else if (x === 0 && y === 0) return 1;
  // valid path
  else return findPath(x - 1, y) + findPath(x, y - 1);
}

// With memoization, we store 'memoize' or store values we have already calculated
// Logic remains the same, but instead of returning, we store the result in our 2d grid (n x n)
// Memo grid will be an array of N arrays of N elements (-1 init)
// We build up the possible paths to each cell, eventually to calculate the 2 numbers we need (x, y-2) and (x-2,y)
// EX) n = 5    we want numPaths to 4,4 which is = numPaths(3,4) + numPaths(4,3)
function numOfPathsToDest(n) {
  let memo = [];

  for (let x = 0; x < n; x++) {
    memo.push(new Array(n).fill(-1));
  }
  return findPaths(n - 1, n - 1, memo);
}

function findPaths(x, y, memo) {
  if (x < 0 || y < 0 || y > x) memo[x][y] = 0;
  // respect boundaries
  else if (memo[x][y] !== -1) return memo[x][y];
  // if not -1, we have already calculated this value
  else if (x === 0 && y === 0) memo[x][y] = 1;
  // reach destination
  else memo[x][y] = findPaths(x - 1, y, memo) + findPaths(x, y - 1, memo); // -1 case: we need to calculate this value

  return memo[x][y];
}
