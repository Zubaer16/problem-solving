class Solution {
  //Function to return the count of number of elements in union of two arrays.
  doUnion(a, n, b, m) {
    // code here
    let union = new Set()
    for (let i = 0; i < b; i++) {
      union.add(a[i])
    }

    for (let i = 0; i < m; i++) {
      union.add(n[i])
    }

    return union.size
  }
}

const union = new Solution()
console.log(union.doUnion([1, 2, 3, 4, 5], [1, 2, 3], 5, 3))
