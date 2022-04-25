const http = require('http');
const PORT = 3000;

const server = http.createServer(function(req,res){

    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });

    res.write('Hello World')

    res.end()
})

try {
    server.listen(PORT)
    console.log(`Server is running on http://localhost:${PORT}`)
} catch (error) {
    console.log(`Error occured => ${error}`)
}
