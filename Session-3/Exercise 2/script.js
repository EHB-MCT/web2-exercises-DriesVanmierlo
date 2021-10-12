'Use strict';

let runtime = 0;

window.onload = function () {

    document.getElementById('searchform').addEventListener('submit', e => {
        e.preventDefault('submit');
        let searchInputTitle = document.getElementById('inputTitle').value;
        let searchInputYear = document.getElementById('inputYear').value;
        fetch(`http://www.omdbapi.com/?t=${searchInputTitle}&y=${searchInputYear}&apikey=ac9700b8`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                let htmlSearch = `<div class="card mb-3" style="max-width: 540px;">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="${data.Poster}" class="card-img" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${data.Title}</h5>
                            <p class="card-text">${data.Plot}</p>
                            <div><p class="card-text"><small class="text-muted">Duration: ${data.Runtime}</small></p>
                            <button id="addRuntimeBtn">+</button></div>
                        </div>
                    </div>
                </div>
            </div>`

                document.getElementById('cardContainer').innerHTML = htmlSearch;
                document.getElementById('addRuntimeBtn').addEventListener('click', e => {
                    e.preventDefault('click');
                    runtimeCounter(data.Runtime);
                })

            })
    })
}

function runtimeCounter(timeString) {
    let time = parseInt(timeString);
    runtime += time
    document.getElementById('runtimeCounter').innerHTML = `${runtime} min`;
}