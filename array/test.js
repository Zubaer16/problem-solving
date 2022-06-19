class Solution {
  commonElements(arr1, arr2, arr3, n1, n2, n3) {
    let i = 0
    let j = 0
    let k = 0
    let newArr = []

    while (i < n1 && j < n2 && k < n3) {
      if (arr1[i] === arr2[j] && arr2[j] === arr2[k]) {
        if (newArr[newArr.length - 1] !== arr1[i]) {
          newArr.push(arr1[i])
        }
        i++
        j++
        k++
      } else if (arr1[i] < arr2[j]) i++
      else if (arr2[j] < arr3[k]) j++
      else k++
    }
    return newArr
  }
}

const s = new Solution()
console.log(s.commonElements([3, 3, 3], [3, 3, 3], [3, 3, 3], 3, 3, 3))
