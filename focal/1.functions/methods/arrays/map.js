const animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' },
  { name: 'Harold', species: 'fish' },
  { name: 'Ursula', species: 'cat' },
  { name: 'Jimmy', species: 'fish' }
]

//Arrow Function

  const names = animals.map((animal) => animal.name)

  //const names = animals.map((animal) => `${animal.name} is a ${animal.species}`)
  
//Function Expression

  // const names = animals.map(function (animal) {
  //   return animal.name
  // })

console.log(names)