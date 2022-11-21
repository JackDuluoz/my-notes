const animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' },
  { name: 'Harold', species: 'fish' },
  { name: 'Ursula', species: 'cat' },
  { name: 'Jimmy', species: 'fish' }
]

const firstOne = animals.find((animal) => animal.species === "fish")

console.log(firstOne)
console.log(firstOne.name)
console.log(firstOne.name + " is the first " + firstOne.species + " in this list.")