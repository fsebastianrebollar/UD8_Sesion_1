const express = require('express'); 
const app = express();              

app.get('/', (req, res) => {        
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello World!<h1>'); 
    res.end();
});

app.get('/contact', (req, res) => {        
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Web de contacto <h1>'); 
    res.end();
});

app.get('/login', (req, res) => {        
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Web de loggin<h1>'); 
    res.end();
});

app.listen(3000, () => {       
    console.log("Servidor escuchando en el puerto 3000"); 
});