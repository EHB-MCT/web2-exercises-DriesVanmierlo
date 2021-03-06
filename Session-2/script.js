'Use strict';

import Team from './Team.js';

let pokemonDataList = [];
let pokemonHTML = "";

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
    console.log("All pokemon:", pokemonDataList);

}

window.onload = function () {
    setTimeout(buildList, 3000);

    function buildList() {
        pokemonDataList.forEach(e => {
            pokemonHTML += `<article class="pokemonArticle">
        <figure class="pokemonFigure">
            <img src="${e.sprites.front_default}" alt="">
        </figure>
        <div class="pokemonInfo">
            <h2>${e.name}</h2>
            <div class="pokemonTypes">
                <p>Type 1</p>
                <p>Type 2</p>
            </div>
        </div>
        <div class="addToTeamButton">
            <button>Add to team</button>
        </div>
    </article>`

        })
        document.getElementById('sectionList').innerHTML = pokemonHTML;
    }

    let team1 = new Team("Kanto Boys");
    let teamMessage = document.getElementById(teamMessages).innerHTML = team1.describe();
}

function refreshTeam() {

}