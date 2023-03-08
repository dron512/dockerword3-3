var http = require('http');
var content = function(req, res){
        res.end("linux system" + "\n");
        res.writeHead(200);
}
var server = http.createServer(content);
server.listen(8000);
