const https = require('https');


const request = https.request({
    hostname: 'www.triptyk.eu',
    path: '/',
    port: 443,
    method: 'GET',  
}, (response) => {
    console.log('mon premier console log');
    let output = '';

    response.setEncoding('utf-8');

    response.on('data', data => {
        output += data;
    })

    response.on('end', () => {
      console.log('Requête terminé !');
    })
})

request.end();