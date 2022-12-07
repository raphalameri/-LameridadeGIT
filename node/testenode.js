var http= require('http');
var n= require('./primeiromodulo');
var dia= require('./moduloData')

http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write('<b>Aula de Node.Js </b> <br>');
    res.write('<i>Lameri, The Legend</i> <br>');
    res.write('Tambem conhecido como:'+n.nome()+ '<br>');
    res.write(dia.diaDaSemana()+'<br>');
    res.end('Bom dia! ');

}).listen(2000);