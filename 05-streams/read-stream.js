const fs = require('fs');

const stream = fs.createReadStream('../fichier-bidon.txt', {
    highWaterMark: 128 * 1024,
    encoding: 'utf8',
    start: 128 * 1024,
});

stream.on('data', (data) => {
    console.log(data.length);
})

stream.on('end', (data) => {
    console.log('ayé, c\'est fini !');
})