// merge sort algorithm

function merge(arr) {
  if (arr.length < 2) {
    return arr
  }
  let middle = Math.floor(arr.length / 2)
  let half_1 = arr.slice(0, middle)

  let half_2 = arr.slice(middle, arr.length)

  const first = merge(half_1)
  const second = merge(half_2)

  return compare(first, second)
}

function compare(a, b) {
  let sort = []
  let count = 0
  while (a.length && b.length) {
    if (a[0] > b[0]) {
      sort.push(b.shift())
      count++
    } else {
      sort.push(a.shift())
    }
  }

  while (a.length) {
    sort.push(a.shift())
  }
  while (b.length) {
    sort.push(b.shift())
    count++
  }

  return count
}

console.log(merge([2, 4, 1, 3, 5]))
