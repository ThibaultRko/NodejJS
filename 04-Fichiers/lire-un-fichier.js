const fs = require('fs');
const fsPromise = require('fs/promises');

const filePath = './fichier-bidon-2.txt';

console.log(fs.readFileSync(filePath, 'utf-8'));


fsPromise.readFile(filePath, 'utf8').then(file => {
    console.log(file);
})