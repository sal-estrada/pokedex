
let pokemonRepository = (function() {
  let pokemonList = [];
  let apiURL = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

  function getAll () {
    return pokemonList;
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
    loadDetails(pokemon).then(function() {
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.innerHTML = ""; 

    let modal = document.createElement('div');
    modal.classList.add('modal');

    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);

    let titleElement = document.createElement('h1');
    titleElement.innerText = pokemon.name;
  
    let contentElement = document.createElement('p');
    let types = pokemon.types.map(t => t.type.name).join(', ');
    contentElement.innerText = `Type: ${types}`;

    let imageElement = document.createElement('img');
    imageElement.src = pokemon.imageUrl;
    imageElement.alt = `${pokemon.name} image`;
    imageElement.classList.add('pokemon-image') //for styling purpose to center image in the modal 

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(imageElement);
    modal.appendChild(contentElement);
    modalContainer.appendChild(modal);

    modalContainer.classList.add('is-visible');

    modalContainer.addEventListener('click', (e) => {
      if (e.target === modalContainer) {
        hideModal();
      }
    });
  });
}

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();


pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});

// document.querySelector('#show-modal').addEventListener('click', () => {
//   showDetails(item.name, item.url);
// });


function hideModal() {
  let modalContainer = document.querySelector('#modal-container');
  modalContainer.classList.remove('is-visible');
}

window.addEventListener('keydown', (e) => {
  let modalContainer = document.querySelector('#modal-container');
  if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
    hideModal();
  }
});

modalContainer.addEventListener('click', (e) => {
  let target = e.target;
  if (target === modalContainer) {
    hideModal();
  }
});