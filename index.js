const fs = require('fs');
const moment = require('moment');
const faker = require('faker');
const csvWriter = require('csv-write-stream')
var writer = csvWriter()

writer.pipe(fs.createWriteStream('out.csv'))

var m = moment(new Date(2018, 0, 1, 0, 0, 0)); // the day before DST in the US

const mcdonaldBranch =
    [
        'Manuel Roxas HW',
        'SM City Clark',
        'Fields Avenue',
        'MacArthur HW',
        'Manila North Rd',
        'Henson St.',
        'Plaridel St.',
        'Sto. Rosario'
    ];

for (let i = 0; i < 31; i++) {
    mcdonaldBranch.forEach((branch) => {
        writer.write({
            Province: 'Pampanga',
            City: 'Angeles City',
            Date: m.format('MMMM D, YYYY'),
            Branch: branch,
            Sales: faker.commerce.price(300000, 500000)
        })
    });
    m.add(1, 'days');
}


writer.end()