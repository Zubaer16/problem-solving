// merge sort algorithm

function merge(arr) {
  if (arr.length < 2) {
    return arr
  }
  let middle = Math.floor(arr.length / 2)
  let half_1 = arr.slice(0, middle)
  console.log('half_1 = ' + half_1)
  let half_2 = arr.slice(middle, arr.length)
  console.log('half_2 = ' + half_2)

  const ami = merge(half_1)
  const tumi = merge(half_2)
}

console.log(merge([2, 3, 4, 5, 6])) 
