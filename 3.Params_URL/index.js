const express = require('express'); 
const app = express();     

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    var nombre = req.query.nombre || "Ramón"
    var apellido = req.query.apellido || "García"
    res.render('index', {
        mensaje: "Recepción de datos",
        nombre: nombre,
        apellido: apellido
    });
});

app.listen(3000, () => {       
    console.log("Servidor escuchando en el puerto 3000"); 
});