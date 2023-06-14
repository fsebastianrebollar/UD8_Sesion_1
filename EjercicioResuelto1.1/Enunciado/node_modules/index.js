var express = require('express');

const app = express();  

app.get('/calculoperimetro', (req, res) => {
    var tipo_figura = req.query.tipe || "square"

    var input1 = req.query.input1 || 1
    var input2 = req.query.input2 || 1

    perimetro = 0
    if (tipo_figura == "square") {
        perimetro = input1*4
    } else if (tipo_figura == "circle") {
        perimetro = 2*3,14159*input1
    } else if (tipo_figura == "triangle") {
        perimetro = input1*input2*0.5
    } else if (tipo_figura == "rectangle") {
        perimetro = input1*2+input2*2
    }

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<p>El cálculo del perímetro es:</p>" + perimetro)
    res.end()
});

app.listen(3000, () => {       
    console.log("Servidor escuchando en el puerto 3000"); 
});