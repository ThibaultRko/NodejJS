/*
* Renvoyer une page html qui affiche les différents postes du fichier posts.json
*/

const http = require('http');
const fs = require('fs/promises');

const server = http.createServer(async (request, response) => {
    const stringifiedJSON = await fs.readFile('./posts.json');
    const dataAsJson = JSON.parse(stringifiedJSON);
    const html = `
    <html>
        <head>
            <title>Le monde des loutres</title>
            <meta charset="utf-8" />
        </head>
        <body>
            ${dataAsJson.posts.map(post => `<h3>${post.title}</h3><p>${post.content}</p>`)}
        </body>
    </html>
   `;

   response.writeHead(200, {
    'Content-type': 'text/html'
   });
   response.end(html);
});

server.listen(8001, () => {
    console.log('je suis prêt :D');
})