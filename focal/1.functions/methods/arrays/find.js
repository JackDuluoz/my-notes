
const animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' },
  { name: 'Harold', species: 'fish' },
  { name: 'Ursula', species: 'cat' },
  { name: 'Jimmy', species: 'fish' }
]

//.find returns the first element in an array that satisfies the criteria of 
//the testing function. If no elements meet the criteria, it returns undefined. 

//Arrow Functions
//Below is .find at work as an arrow function with one parameter 
//and an intrinsic return.

const firstOne = animals.find((animal) => animal.species === "fish")

//Function Expression

//As a function expression, .find would look like this.

const firstOneExpression = animals.find(function (animal) {
  return animal.species === "fish"
})

//For Loop
//Without functions -- as a for ... of loop.

const firstFish = []
for (let animal of animals) {
  if (animal.species === "fish") {
    firstFish.push(animal)
  }
}

//Indexed For Loop
//As an old indexed for loop.
const firstDog = []
for (let animal = 0; animal < animals.length; animal++) {
  if (animals[animal].species === "dog") {
    firstDog.push(animals[animal])
  }
}

console.log(firstOne)
console.log(firstOne.name)
console.log(firstOne.name + " is the first " + firstOne.species + " in this list.")
console.log("")
console.log(firstOneExpression)
console.log("")
console.log(firstFish[0])
console.log(firstDog[0])