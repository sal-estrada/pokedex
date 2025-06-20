
// Using DOM Practice

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

function addListItem(pokemon){
  let element = document.querySelector('.pokemon-list');
  let listItem = document.createElement('li');
  let button = document.createElement('button');
  button.innerText = pokemon.name;
  button.classList.add("button");
  listItem.appendChild(button);
  element.appendChild(listItem);
  button.addEventListener('click', function (){
  showDetails(pokemon)});
}

function showDetails(pokemon){
  console.log(pokemon);
} 

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem

  }
})()

pokemonRepository.add({name: 'Pikachu', height: 3.1, type: 'Electric'});

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);   
  }
);

