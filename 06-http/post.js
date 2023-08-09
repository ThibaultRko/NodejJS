const http = require('http');

const server = http.createServer((request, response) => {
    let output = '';
    
    const urlObject = new URL(request.url, 'http://localhost:8001');
    console.log(urlObject);
    console.log(request.method);

    request.on('data', data => {
        output += data;
    })

    request.on('end', () => {
        output = JSON.parse(output);
        response.end();
        console.log(output);
    })
});

server.listen(8001, () => {
    console.log('Armed and ready !');
})