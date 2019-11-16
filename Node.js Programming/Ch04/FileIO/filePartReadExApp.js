var fs = require("fs");

// 파일에서 데이터를 읽어온다.
fs.open("./partOutputData.txt", "r", function(err, fd){
	if(err) throw err;

	//바이너리 데이터를 읽고 쓰기 위한 Buffer 객체 샏성
	var buf = new Buffer(10);
	console.log("버퍼 타입 : %s", Buffer.isBuffer(buf));

	fs.read(fd, buf, 0, buf.length, null, function(err, bytesRead, buffer){
		if(err) throw err;

		var inStr = buffer.toString("utf8", 0, bytesRead);
		console.log("파일에서 읽은 데이터 : %s", inStr);

		console.log(err, bytesRead, buffer);

		fs.close(fd, function(){
			console.log("partOutputData.txt 파일을 열고 읽기 완료.");
		});
	});
});


/* 결과값
버퍼 타입 : true
(node:1191) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
파일에서 읽은 데이터 : 안녕

null 7 <Buffer ec 95 88 eb 85 95 0a 00 00 00>
partOutputData.txt 파일을 열고 읽기 완료.


이 메소드 쓰지말래!!!
*/

