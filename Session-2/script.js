'Use strict';

let pokemonDataList = [];

fetchPokemon();

function fetchPokemon() {

    console.log("Fetch!");

    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => {
            return response.json();
        })
        .then(data => {
            data.results.forEach(e => {
                fetch(`${e.url}`)
                    .then(response => {
                        return response.json();
                    })
                    .then(list => {
                        pokemonDataList.push(list);
                    });
            })
        })
    console.log("LIJST:", pokemonDataList);
}