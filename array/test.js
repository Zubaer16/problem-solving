// merge sort algorithm

function merge(arr) {
  if (arr.length < 2) {
    return arr
  }
  let middle = Math.floor(arr.length / 2)
  let half_1 = arr.slice(0, middle)
  let half_2 = arr.slice(middle, arr.length)

  const ami = merge(half_1)
  console.log(ami)
  const tumi = merge(half_2)
  console.log(tumi)
}

console.log(merge([2, 3, 4, 5, 6]))
