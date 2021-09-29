'Use strict';

window.onload = function () {
    console.log("document loaded");

    const form = document.getElementById('form').addEventListener('submit', (e) => {
        e.preventDefault("submit");
        let orderdetails = {
            name: document.getElementById("nameForm").value,
            email: document.getElementById("emailForm").value,
            order: document.getElementById("orderForm").value
        }

        printOrder(orderdetails);
    });
}

function printOrder(orderdetails) {
    let message = document.getElementById("messages").innerHTML = `<p>The order for the customer ${orderdetails.name}  is the following:  ${orderdetails.order}. The customer may be notified by email:  ${orderdetails.email}</p>`
}