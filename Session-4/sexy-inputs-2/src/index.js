import Cleave from 'cleave.js';

var cleave = new Cleave('.rrn', {
    blocks: [2, 2, 2, 3, 2]
})

var cleave = new Cleave('.phonenumber', {
    phone: true,
    phoneRegionCode: 'BE'
});

new Cleave('.birthdate', {
    date: true,
    datePattern: ['d', 'm', 'Y']
});