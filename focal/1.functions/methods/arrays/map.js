
//.map creates a new array from an existing array by enacting the same function
//on all elements in the existing array. Therefore, the .map array is always the
//same length as the existing array. A simple example would be:

const numbers = [2, 4, 6, 8, 10, 12]

const timesThree = numbers.map(function (number) {
  number = number * 3
  return number
})

//In this example, each element in the original array has been multiplied by 3,
//and the modified elements populate a new array of the same length.

const animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' },
  { name: 'Harold', species: 'fish' },
  { name: 'Ursula', species: 'cat' },
  { name: 'Jimmy', species: 'fish' }
]

//Arrow Function
//We can use the .map method to produce a new array from animals that lists
//only the animal names. This is shown as an arrow function below (one
//parameter, one intrinsic return).

const names = animals.map((animal) => animal.name)

//const namesString = animals.map((animal) => `${animal.name} is a ${animal.species}`)
  
//Function Expression
//As a function expression, .map looks like this.

const justNames = animals.map(function (animal) {
  return animal.name
})

//For Loop
//As a for loop--no function--it would work like this (this time for species.)

let species = []
for (let animal of animals) {
  species.push(animal.species)
}

//Indexed For Loop
//Finally, as an indexed for loop, the code would look like this.

let justSpecies = []
for (let animal = 0; animal < animals.length; animal++) {
  justSpecies.push(animals[animal].species)
}

console.log(numbers)
console.log(timesThree)
console.log("")
console.log(names)
//console.log(namesString)
console.log("")
console.log(justNames)
console.log("")
console.log(species)
console.log("")
console.log(justSpecies)