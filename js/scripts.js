// This code is for the content to be displayed according to Part 1.
// pokemonList = [
//     {name: 'Bulbasaur', height: 7, type: ['grass', ' poison']},
//     {name: 'Squirtle', height: 0.5, type: 'water'},
//     {name: 'Charmander', height: 0.6, type: 'fire'}
// ];

// for (let i = 0; i < pokemonList.length; i++) {
//    let name = pokemonList[i].name;
//    let height = pokemonList[i].height;
//    let type = pokemonList[i].type

//    if (Array.isArray(type)) {
//     type = type.join(', ');
// };
//     document.write(name + " (height: " + height + ") - Type: " + type + "<br>");
// }

// This code is for the content to be displayed according to Part 3.
let pokemonList = [
    {name: 'Bulbasaur', height: 7, type: ['grass', ' poison']},
    {name: 'Squirtle', height: 0.5, type: 'water'},
    {name: 'Charmander', height: 0.6, type: 'fire'}
  ];
  
  for (let i = 0; i < pokemonList.length; i++) {
    let name = pokemonList[i].name;
    let height = pokemonList[i].height;
  
    if (height > 1.0) {
      document.write(name + " (height: " + height + ") - " + "Wow! You are a big Pokemon!<br>");
    } else {
      document.write(name + " (height: " + height + ")<br>");
    }
  }
