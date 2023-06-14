var express = require('express');
var modulo_geometria = require('./modulo_geometria')

const app = express();
app.set('view engine', 'ejs');

app.get('/calculoperimetro', (req, res) => {
    var tipo_figura = req.query.tipe || "square"

    var input1 = req.query.input1 || 1
    var input2 = req.query.input2 || 1

    res.render('calculo', {
        calculo: "perimetro",
        tipo_geometria: tipo_figura,
        perimetro: modulo_geometria.calculo_perimetro(tipo_figura, input1, input2)});
});

app.get('/calculoarea', (req, res) => {
    var tipo_figura = req.query.tipe || "square"

    var input1 = req.query.input1 || 1
    var input2 = req.query.input2 || 1

    res.render('calculo', {
        calculo: "area",
        tipo_geometria: tipo_figura,
        perimetro: modulo_geometria.calculo_area(tipo_figura, input1, input2)});
});

app.listen(3000, () => {       
    console.log("Servidor escuchando en el puerto 3000"); 
});