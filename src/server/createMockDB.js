const fs = require('fs');
const path = require('path');
const faker = require('faker');
const times = 50;

// declare collections here
const friends = [];

// generate fake data inside the loop
// this is an old fashion for loop but the alternatives using
// ES6 I think are to complex
for (let i = 0; i < times; i++) {
    // generate fake friends
    friends.push({
        id: i,
        avatar: faker.internet.avatar(),
        name: faker.name.findName()
    });
}
// Add collectiont to fake db
const data = JSON.stringify({ friends });
const filepath = path.join(__dirname, 'db.json');

fs.writeFile(filepath, data, function(err) {
    err ? console.log(err) : console.log('Mock DB created.');
});
