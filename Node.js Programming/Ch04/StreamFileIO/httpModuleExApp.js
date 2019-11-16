var fs = require("fs");
var http = require("http");
var server = http.createServer(function(req,res){
	var instream = fs.createReadStream("./inputData.txt");

	instream.pipe(res);
});

server.listen(7001, "127.0.0.1");


/* 결과값
실행하면 요청이 올때까지 대기한다.
*/