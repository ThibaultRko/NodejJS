const fs = require('fs');
const fsPromises = require('fs/promises');

console.log(fs.readdirSync('.'));

fsPromises.readdir('.', {
    withFileTypes: true,
}).then((directory) => {
    console.log(directory);
})