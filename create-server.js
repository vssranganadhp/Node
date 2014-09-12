var http = require('http');

http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'application/json'});
	response.end("{\"key\":\"value\"}");
}).listen(8124);