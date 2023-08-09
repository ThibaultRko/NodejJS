/*
* Faire une requêter à l'api de triptyk afin de récupérer tous les posts.
* Une fois qu'on a reçu tous les posts, à l'aide d'un JSON.parse,
* on va venir les afficher dans un tableau
* BONUS: afficher seulement les titres de nos posts dans le tableau
*/

const https = require('https');

const request = https.request({
    hostname: 'triptyk-api-dev.triptyk.eu',
    path: '/api/v1/posts',
    port: 443,
    method: "GET"
}, response => {
    response.setEncoding('utf-8');
    let output = '';

    response.on('data', data => {
        output += data;
    })

    response.on('end', () => {
        const dataAsJson = JSON.parse(output);
        const dataArray = dataAsJson.data;
        console.log(dataArray.map(post => post.attributes.title));
    })

});

request.end();