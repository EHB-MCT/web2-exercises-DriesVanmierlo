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
    },
    {
        id: '4',
        name: "Pizza",
        price: '10'
    },
    {
        id: '5',
        name: "Wraps",
        price: '6'
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

    let price = document.getElementById('price').addEventListener('click', (e) => {
        e.preventDefault("click");
        calculatePrice();
    });
}

function printOrder(orderdetails) {
    let message = document.getElementById("messages").innerHTML = `<p>The order for the customer ${orderdetails.name}  is the following:  ${orderdetails.order.name}. The customer may be notified by email:  ${orderdetails.email}</p>`
}

function calculatePrice() {

    let checkboxes = document.getElementsByName('dish');
    let dishesSelected = [];

    checkboxes.forEach(e => {
        if (e.checked) {
            console.log(e);
            dishesSelected.push(e.value);
        }
    });

    console.log(dishesSelected);
}