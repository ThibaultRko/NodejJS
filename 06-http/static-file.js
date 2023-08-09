const http = require('http');
const fs = require('fs');

const  server = http.createServer((request, response) => {
    const extension = request.url.split('.').pop();
    let type;
    let output

    if (extension === 'html') {
        type = 'text/html';
        output = fs.createReadStream('index.html');     
    } else if (extension === 'png') {
        type= 'image/png';
        output = fs.createReadStream('cowboy.png');
    } else {
      response.writeHead(404, {});
      return response.end('Not found'); 
    }

    response.writeHead(200, {
        'Content-type': type,
    })

    output.pipe(response);
    // Quand le response.end() est appelé, le flux n'a pas eu le temps d'être envoyé dans la response
    // response.end()
})

server.listen(8001, () => {
    console.log('Je suis prêt !');
})