
//.sort modifies an existing array, returning the array
//with the elements sorted in a variety of ways.

//This can be done alphabetically:

const months = ["May", "June", "March", "February", "April", "December"]
months.sort()
console.log(months)

//This returns the array as ['April', 'December', 'February', 'June', 'March', 'May']
//The array elements have been sorted alphabetically.

//.sort will also sort arrays numerically.

const numbers = [1, 37, 444, 45, 21, 56, 512, 1000]
numbers.sort()
console.log(numbers)

//This returns the array [1, 1000, 21, 37, 444, 45, 512, 56].
//Note that the array has not truly been sorted numerically (1000 before 21 e.g.)
//This is because .sort works by converting elements into strings first and
//comparing their values as strings before converting them back into an array. 
//Since 1000 comes before 21 when seen as a string, .sort places 1000 before 21.

//These examples used .sort() as a functionless method.
//.sort can also be called with parameters. Foe example:

const basket = [
  { item: "headphones",     price: 61 },
  { item: "motherboard",    price: 600 },
  { item: "ram",            price: 45 },
  { item: "compressed air", price: 8 },
  { item: "thermal paste",  price: 5 }
]

//These shopping basket items can be sorted by item name or by value as follows.

//Arrow Function

//Sort by Value
//Note: this time, 61 appears before 600.
basket.sort((a, b) => a.price - b.price)
console.log(basket)

//Sort Alphabetically (in this case, by item name)
basket.sort((a, b) => {
  const itemA = a.item
  const itemB = b.item
  if (itemA < itemB) {
    return -1
  }
  if (itemA < itemB) {
    return 1
  }
  return 0
})
console.log(basket)
