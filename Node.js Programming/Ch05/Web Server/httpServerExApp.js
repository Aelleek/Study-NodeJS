var http = require("http");

// 웹 서버 객체 생성
var server = http.createServer();

//웹 서버를 시작하며 3000번 포트에서 대기한다.
var port = 3000;

server.listen(port, function(){
	console.log("웹 서버가 시작되었습니다. : %d", port);
});

/* 결과값
웹 서버가 시작되었습니다. : 3000

3000번 포트로 서버가 클라이언트이 요청을 기다리고 있다.
*/