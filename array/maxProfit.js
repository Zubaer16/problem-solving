// var maxProfit = function (prices) {
//   let max = 0
//   for (let i = 0; i < prices.length; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       if (prices[i] < prices[j]) {
//         let temp = prices[j] - prices[i]

//         if (temp > max) {
//           max = temp
//         }
//       }
//     }
//   }
//   return max
// }

// console.log(maxProfit([7, 1, 5, 3, 6, 4]))

var maxProfit = function (prices) {
  let left = 0
  let right = 1
  let max_profit = 0

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left]
      max_profit = Math.max(max_profit, profit)
    } else {
      left = right
    }
    right++
  }
  return max_profit
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
