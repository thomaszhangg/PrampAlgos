// This question requires us to traverse an undirected graph, a 2D matrix
// A recursive solution is more intuitive to me, but this can be solved with BFS, DFS, or Union Find
// We should be mindful of the grid boundaries as we traverse adjacent cells in the grid
// We can view a valid 'island' as a group of adjacent (connected) 1s
// We'll first used a nested loop to traverse each cell and each time we encounter a 1 we'll:
// 1) "sink" that cell and it's vertically/horizontally (but not diagonally) adjacent 1's by turning it into a 0
// We do this "expansion" to avoid double counting an island
// 2) After we've "expanded" and sinked all other parts of the same island, we'll then increment our islandCount counter

function getNumberOfIslands(binaryMatrix) {
  let count = 0;

  for (let i = 0; i < binaryMatrix.length; i++) {
    for (let j = 0; j < binaryMatrix[0].length; j++) {
      if (binaryMatrix[i][j] === 1) {
        count += DFS(binaryMatrix, i, j);
      }
    }
  }

  return count;

  function DFS(grid, i, j) {
    if (
      i < 0 ||
      i >= binaryMatrix.length ||
      j < 0 ||
      j >= binaryMatrix[i].length ||
      binaryMatrix[i][j] !== 1
    ) {
      return;
    }

    binaryMatrix[i][j] = 0;
    DFS(grid, i - 1, j);
    DFS(grid, i + 1, j);
    DFS(grid, i, j - 1);
    DFS(grid, i, j + 1);

    return 1;
  }
}

// Test
