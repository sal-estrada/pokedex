
// Using DOM Practice

let pokemonRepository = (function() {
  let pokemonList = [];
  let apiURL = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

  function getAll () {
    return pokemonList
  }

  function add (pokemon) {
    if (typeof pokemon === 'object' && 
    pokemon !== null 
    // &&
    // typeof pokemon.name === 'string' &&
    // typeof pokemon.height === 'number' &&
    // pokemon.type !== undefined
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

  function loadList() {
    return fetch(apiURL).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  function showDetails(pokemon){
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
    });
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails
  }
})();

// console.log(pokemonRepository.getAll());

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});