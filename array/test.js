class Solution {
  reverseWord(str) {
    //Your code here
    let newString = str.split('')
    let newArr = []

    for (let i = 0, j = newString.length; i < newString.length; i++, j--) {
      newArr[i] = newString[j - 1]
    }

    return newArr.join('')
  }
}

let solution = new Solution()
console.log(solution.reverseWord('123'))
