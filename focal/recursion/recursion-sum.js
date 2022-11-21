// function countUpFrom(number) {
//   if (number <= 147) {
//     console.log(number);
//     countUpFrom(number + 1);
//   }
  
// }
// countUpFrom(1);

function countDownSum (number) {
  if (number === 1) {
    return 1
  }
 return number + countDownSum(number - 1)
}
console.log(countDownSum(6))