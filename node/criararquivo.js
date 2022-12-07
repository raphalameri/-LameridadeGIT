var fs = require('fs');
var http = require ('http');
var url = require('url');


fs.appendFile('novoArquivo.txt', 'Arquivo criado com sucesso!', function(err){
    if(err) throw err;
    console.log('Arquivo criado...');
});
