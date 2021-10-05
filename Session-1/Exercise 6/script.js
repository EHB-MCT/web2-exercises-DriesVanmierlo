'Use strict';

const dishes = [{
        id: '1',
        name: "Kapsalon",
        price: '8'
    }, {
        id: '2',
        name: "Ribbetjes met frieten",
        price: '16'
    },
    {
        id: '3',
        name: "Burger",
        price: '12'
    }
];

window.onload = function () {
    console.log("document loaded");

    const form = document.getElementById('form').addEventListener('submit', (e) => {
        e.preventDefault("submit");



        let orderdetails = {
            name: document.getElementById("nameForm").value,
            email: document.getElementById("emailForm").value,
            order: document.querySelector('input[name="dish"]:checked').value
        }

        let dish = dishes.find(d => d.id == orderdetails.order);

        orderdetails.order = dish;

        console.log(orderdetails.order.name);

        printOrder(orderdetails);
    });
}

function printOrder(orderdetails) {
    let message = document.getElementById("messages").innerHTML = `<p>The order for the customer ${orderdetails.name}  is the following:  ${orderdetails.order.name}. The customer may be notified by email:  ${orderdetails.email}</p>`
}