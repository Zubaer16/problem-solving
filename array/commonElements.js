class Solution {
  commonElements(arr1, arr2, arr3, n1, n2, n3) {
    let map1 = new Map()
    let map2 = new Map()
    let newArr = []

    for (let i = 0; i < n1; i++) {
      map1.set(arr1[i], 1)
    }

    for (let i = 0; i < n2; i++) {
      map2.set(arr2[i], 1)
    }

    for (let i = 0; i < n3; i++) {
      if (map1.has(arr3[i]) && map2.has(arr3[i])) {
        if (newArr.length === 0) {
          newArr[0] = arr3[i]
        } else if (newArr[newArr.length - 1] !== arr3[i]) {
          newArr[newArr.length] = arr3[i]
        }
      }
    }
    return newArr
  }
}

const s = new Solution()
console.log(s.commonElements([3, 3, 3], [3, 3, 3], [3, 3, 3], 3, 3, 3))
