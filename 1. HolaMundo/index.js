var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var url = req.url;
    if(url ==='/contact'){
        res.write('<h1>Web de contacto <h1>'); 
        res.end(); 
    }else if(url ==='/login'){
        res.write('<h1>Web de loggin<h1>'); 
        res.end();
    }else{
        res.write('<h1>Hello World!<h1>'); 
        res.end();
    }
}).listen(3000, function(){
    console.log("Servidor escuchando en el puerto 3000"); 
});