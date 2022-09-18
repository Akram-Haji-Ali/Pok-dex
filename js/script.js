// define a list of pokemon 

let pokemonList = [
    { 
        name: 'Bulbasaur',
        height: 0.7, 
        types: ['grass', 'poison']
    },

    {
        name: 'Charmander', 
        height: 0.6, 
        types: ['fire']
    },
    
    {
        name: 'Squirtle',
        height: 0.5,
        types: ['water']
    },
    
    {
        name: 'Psyduck',
        height: 0.8 ,
        types: ['water']
    }
];

for (let i = 0; i < pokemonList.length; i++ ) { 
    if  (pokemonList[i].height > 0.6) {
      document.write(pokemonList[i].name + ' height: '  + pokemonList[i].height + ' -Wow, that\'s big!' + '<br>' );
    }
     else {
        document.write(pokemonList[i].name + ' height: '  + pokemonList[i].height + '<br>'); // the <br> tag added a line break
    }
  }