const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 },
  { amount: 800 },
  { amount: 500 },
  { amount: 75 }
]

const total = orders.reduce((sum, order) => sum + order.amount, 0)

console.log(total)

// const total = orders.reduce(function(sum, order) {
//   return sum + order.amount
// }, 0)
 