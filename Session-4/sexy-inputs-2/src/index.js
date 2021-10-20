import Cleave from 'cleave.js';

var cleave = new Cleave('.rrn', {
    delimiters: ['.', '.', '-', '.'],
    blocks: [2, 2, 2, 3, 2]
});

var cleave2 = new Cleave('.phonenumber', {
    phone: true,
    phoneRegionCode: 'BE'
});

var cleave3 = new Cleave('.birthdate', {
    date: true,
    delimiter: '-',
    datePattern: ['d', 'm', 'Y']
});