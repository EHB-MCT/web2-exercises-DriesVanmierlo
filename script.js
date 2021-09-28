'Use strict';

window.onload = function () {
    console.log("document loaded");

    const form = document.getElementById('form').addEventListener('submit', (e) => {
        e.preventDefault("submit");
        let name = document.getElementById("nameForm").value;
        let email = document.getElementById("emailForm").value;
        let order = document.getElementById("orderForm").value;
        console.log(name, email, order);
        let message = document.getElementById("messages").innerHTML = `<p>The order for the customer ${name}  is the following:  ${order}. The customer may be notified by email:  ${email}</p>`
    });
}