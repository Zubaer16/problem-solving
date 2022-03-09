// function retrieveArr(arr) {
//   let newArr = arr
//   console.log(newArr)
//   if (isNaN(newArr.length) === true) {
//     return newArr
//   } else {
//     return retrieveArr(newArr[0])
//   }
// }

// console.log(retrieveArr([[[1]]]))

// function retrieveArr(arr) {
//   let retArr = []
//   for (let i = 0; i < arr.length; i++) {
//     function vlauei(arr) {
//       let newArr = arr
//       console.log(newArr)
//       if (isNaN(newArr.length) === true) {
//         retArr[i] = newArr
//       } else {
//         vlauei(newArr[0])
//       }
//     }
//     vlauei(arr[i])
//   }
//   return retArr
// }

// console.log(retrieveArr([[[[1]]], 2, [[3]], [4]]))

let items = [5, 3, 7, 6, 2, 9]

function swap(items, leftIndex, rightIndex) {
  let temp = items[leftIndex]
  items[leftIndex] = items[rightIndex]
  items[rightIndex] = temp
}

function partition(items, left, right) {
  let pivot = items[Math.floor((right + left) / 2)]
  i = left
  j = right

  while (i <= j) {
    while (items[i] < pivot) {
      i++
    }

    while (items[j] > pivot) {
      j--
    }

    if (i <= j) {
      swap(items, i, j)
      i++
      j--
    }
  }
  return i
}

function quickSort(items, left, right) {
  let index

  if (items.length > 1) {
    index = partition(items, left, right)
    console.log(index)

    if (left < index - 1) {
      quickSort(items, left, index - 1)
    }

    if (index < right) {
      quickSort(items, index, right)
    }
  }

  return items
}

let result = quickSort(items, 0, items.length - 1)
console.log(result)
