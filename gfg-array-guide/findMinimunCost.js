// Greedy approach
function findMinimumCost(arr) {
  const n = arr.length

  return (n - 1) * Math.min(...arr)
}

const arr = [4, 3, 2]
console.log(findMinimumCost(arr))
