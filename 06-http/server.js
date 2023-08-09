const http = require('http');

const server = http.createServer((request, response) => {
    const html = `
        <html>
            <head>
                <title>Le monde des loutres</title>
                <meta charset="utf-8" />
            </head>
            <body>
              <h2>
                Le monde des loutres
              </h2>
            </body>
        </html>
    `;
    response.writeHead(200, {
        'Content-type': 'text/html'
    })
    //pour ajouter des données à la réponse,
    // on peut la passer en argument du write() ou du end()    
    response.write(html);

    response.end();
});

server.listen(8001, () => {
    console.log('Le serveur est à l\'écoute');
})