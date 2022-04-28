var merge = function (intervals) {
  let result = []
  let last
  intervals.forEach((element) => {
    if (!last || element[0] > last[1]) {
      result.push((last = element))
    } else if (element[1] > last[1]) {
      last[1] = element[1]
    }
    if (element[0] < last[0]) {
      last[0] = element[0]
    }
  })
  return result
}

console.log(
  merge([
    [1, 4],
    [0, 5],
  ])
)
