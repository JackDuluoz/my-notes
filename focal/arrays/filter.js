
const animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' },
  { name: 'Harold', species: 'fish' },
  { name: 'Ursula', species: 'cat' },
  { name: 'Jimmy', species: 'fish' }
]

//Arrow Functions

  const dogs = animals.filter((animal) => animal.species === 'dog')

  const noDogs = animals.filter((animal) => animal.species !== 'dog')
  
//Function Expressions

  // const dogs = animals.filter(function (animal) {
  //   return animal.species === 'dog'
  // })

  // const noDogs = animals.filter(function (animal) {
  //   return animal.species !== 'dog'
  // })

  //For Loop

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

console.log(dogs)
console.log('')
console.log(noDogs)
console.log('')
// console.log(allDogs)
// console.log('')
// console.log(withoutDogs)