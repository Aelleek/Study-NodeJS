var http = require("http");
var fs = require("fs");

// 웹 서버 객체 생성
var server = http.createServer();

// 웹 서버를 시작하여 3000번 포트에서 대기하도록 한다.
var port = 3002;
server.listen(port, function(){
	console.log("웹 서버가 시작되었습니다. : %d",port);
});

// 클라이언트 연결 이벤트 처리
server.on("connection", function(socket){
	var addr = socket.address();
	console.log("클라이언트가 접속했습니다. : %s, %d", addr.address, addr.port);
});

// 클라이언트 요청 이벤트 처리
server.on("request", function(req, res){
	console.log("클라이언트 요청이 들어왔습니다.");

	// 클라이언트의 요청에 대한 처리를 하는 소스가 들어갈 공간.

	/* // fs 모듈을 이용해 이미지 파일 전송
	var filename = "testIMG.jpeg";
	fs.readFile(filename, function(err, data){
		res.writeHead(200, {"Content-Type" : "image/png"});
		res.write(data);
		res.end();
	});
	*/

	//파일을 스트림으로 읽어서 응답하는 방법.
	var filename = "testIMG.jpeg";
	var infile = fs.createReadStream(filename, {flags : "r"});

	// 파일을 스트림 객체로 읽어 들인 후 pipe() 메소드롤 응답 객체와 연결하면 별다른 코드 없이 요청에 응답을 보낼 수 있다.
	infile.pipe(res);

	console.dir(req);
});

// 서버 종료 이벤트 처리
server.on("close",function(){
	console.log("서버가 종료됩니다.");
});

/* http://localhost:3000 으로 접속했을 때의 결과값
웹 서버가 시작되었습니다. : 3000
클라이언트가 접속했습니다. : ::1, 3000
클라이언트가 접속했습니다. : ::1, 3000
클라이언트 요청이 들어왔습니다.
IncomingMessage {
  _readableState: ReadableState {
    objectMode: false,
..........
*/