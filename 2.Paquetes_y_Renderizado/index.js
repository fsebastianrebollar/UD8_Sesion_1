const express = require('express'); 
const app = express();
const dt = require('./moduloexterno')       

app.set('view engine', 'ejs');

app.get('/', (req, res) => {        
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>La fecha actual es <h1>' + dt.fechaActual()); 
    res.end();
});

app.get('/ejs', (req, res) => {        
    res.render('index', {
        mensaje: "Prueba con EJS",
        fechaActual: dt.fechaActual()});
});

app.listen(3000, () => {       
    console.log("Servidor escuchando en el puerto 3000"); 
});