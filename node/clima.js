var fs = require('fs');
var http = require ('http');
var url = require('url');
http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "."+q.pathname;
fs.appendFile(filename, function(err){
    if(err){
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("Pagina invalida");
    }
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
    
});

}).listen(80);