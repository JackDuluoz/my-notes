
const animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' },
  { name: 'Harold', species: 'fish' },
  { name: 'Ursula', species: 'cat' },
  { name: 'Jimmy', species: 'fish' }
]

//Arrow Functions
//This section shows .filter at work as an arrow function with one parameter
//and an intrinsic return.

  const dogs = animals.filter((animal) => animal.species === 'dog')

  const noDogs = animals.filter((animal) => animal.species !== 'dog')
  
//Function Expressions
//As a function expression, .filter would work likes this.

  // const dogs = animals.filter(function (animal) {
  //   return animal.species === 'dog'
  // })

  // const noDogs = animals.filter(function (animal) {
  //   return animal.species !== 'dog'
  // })

//For Loop
//This code could also be written without using functions; below, the same
//result is achieved using a for ... of loop. The code is much longer.

// let allDogs = []
// for (let animal of animals) {
//   if (animal.species === "dog") {
//     allDogs.push(animal)
//   }
// } 

// let withoutDogs = []
// for (let animal of animals) {
//   if (animal.species !== "dog") {
//     withoutDogs.push(animal)
//   }
// } 

// Indexed For Loop
//Finally, an older indexed for loop could be used as follows. (Even longer.)

// let allDogs = []
// for (let animal = 0; animal < animals.length; animal++) {
//   if (animals[animal].species === "dog") {
//     allDogs.push(animals[animal])
//   }
// } 

// let withoutDogs = []
// for (let animal = 0; animal < animals.length; animal++) {
//   if (animals[animal].species !== "dog") {
//     withoutDogs.push(animals[animal])
//   }
// } 

//These console logs demonstrate the result. Uncomment the last two to confirm
//that the for loops produce the same results as the .filter functions.
console.log(dogs)
console.log('')
console.log(noDogs)
console.log('')
// console.log(allDogs)
// console.log('')
// console.log(withoutDogs)