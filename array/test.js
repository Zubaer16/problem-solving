function power(x, y) {
  let multiple = 1
  function powe(x, y) {
    // if (y == 0) {
    //   return multiple
    // } else {
    //   multiple = multiple * x
    //   return powe(x, --y);
    // }
    if (y > 0) {
      multiple = multiple * x
      return powe(x, --y)
    }
  }
  powe(x, y)
  return multiple
}
console.log(power(2, 0))
