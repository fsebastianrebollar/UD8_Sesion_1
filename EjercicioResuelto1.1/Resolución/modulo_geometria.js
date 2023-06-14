function calculo_perimetro(tipo_figura, input1, input2) {
    var perimetro = 0
    if (tipo_figura == "square") {
        perimetro = input1*4
    } else if (tipo_figura == "circle") {
        perimetro = 2*3,14159*input1
    } else if (tipo_figura == "rectangle") {
        perimetro = input1*2+input2*2
    }
    return perimetro
}

function calculo_area(tipo_figura, input1, input2) {
    var area = 0
    if (tipo_figura == "square") {
        area = input1*2
    } else if (tipo_figura == "circle") {
        area = 3,14159*input1*input1
    } else if (tipo_figura == "rectangle") {
        area = input1*input2
    }
    return area
}

exports.calculo_perimetro = calculo_perimetro
exports.calculo_area = calculo_area