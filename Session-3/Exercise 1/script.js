'Use strict';

const randomNumber = Math.floor(Math.random() * 21);
console.log("Random number:", randomNumber);

window.onload = function () {

    console.log("document loaded");

    document.getElementById('form').addEventListener('submit', e => {
        e.preventDefault("submit");

        compareNumber(document.getElementById('inputGuess').value).then(
            result => {
                document.getElementById('messages').innerText = result
            },
            error => {
                document.getElementById('messages').innerText = error
            }
        );
    })
}



function compareNumber(nr) {

    return new Promise(function (resolve, reject) {
        console.log("Current guess:", guess);

        resolve('You guessed it!')
        reject();

        // guess.onload = () => resolve(guess);
        // guess.onerror = () => reject(new Error("er is een error"));
    })
}

// if (guess < nr) {
//     //higher
//     console.log("Higher");
//     message = "<p>The mystery number is higher. Guess again!</p>";
// } else if (guess > nr) {
//     //Lower
//     console.log("lower");
//     message = "<p>The mystery number is lower. Guess again!</p>";
// } else {
//     //Correct
//     console.log("Correct");
//     message = "<p>You have guessed the mystery number!</p>";
// }