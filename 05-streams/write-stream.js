const fs = require('fs');

const readStream  = fs.createReadStream('../fichier-bidon.txt');
const writeStream = fs.createWriteStream('fichier-bidon-copy.txt', 'utf-8');


writeStream.write('banane');

readStream.pipe(writeStream);

process.stdout.write('coucou, je suis dans la console');