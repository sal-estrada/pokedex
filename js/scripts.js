
// let pokemonList = [
//     {name: 'Bulbasaur', height: 7, type: ['grass', ' poison']},
//     {name: 'Squirtle', height: 0.5, type: 'water'},
//     {name: 'Charmander', height: 0.6, type: 'fire'}
//   ];
  
  // for (let i = 0; i < pokemonList.length; i++) {
  //   let name = pokemonList[i].name;
  //   let height = pokemonList[i].height;
  
  //   if (height > 1.0) {
  //     document.write(name + " (height: " + height + ") - " + "Wow! You are a big Pokemon!<br>");
  //   } else {
  //     document.write(name + " (height: " + height + ")<br>");
  //   }
  // }

  // REFACTORED CODE

let pokemonRepository = (function() {
  let pokemonList = [
    {name: 'Bulbasaur', height: 7, type: ['grass', ' poison']},
    {name: 'Squirtle', height: 0.5, type: 'water'},
    {name: 'Charmander', height: 0.6, type: 'fire'}
  ]

  function getAll () {
    return pokemonList
  }

  function add (pokemon) {
    if (typeof pokemon === 'object' && 
    pokemon !== null &&
    typeof pokemon.name === 'string' &&
    typeof pokemon.height === 'number' &&
    pokemon.type !== undefined
  ) {
    pokemonList.push(pokemon);
  } else console.log("Wrong input! Please use the correct format.")
}

  return {
    getAll: getAll,
    add: add
  }
})()

pokemonRepository.getAll().forEach(function(pokemon) {
  console.log(pokemon.name + ", height: " + pokemon.height);
});

pokemonRepository.add({name:'Pikachu', height: 3, type: 'electric'});

console.log(pokemonRepository.getAll())