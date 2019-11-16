var fs = require("fs");

//파일에 데이터를 쓴다.
fs.open("./partOutputData.txt","w",function(err, fd){
	if(err) throw err;

	var buf = new Buffer("안녕\n");
	fs.write(fd, buf, 0, buf.length, null, function(err, written, buffer){
		if(err) throw err;
			
			console.log(err, written, buffer);

		fs.close(fd, function(){
				console.log("파일 열고 데이터 쓰고 파일 닫기 완료.");
		});
	});
});


/* 결과값
null 7 <Buffer ec 95 88 eb 85 95 0a>
파일 열고 데이터 쓰고 파일 닫기 완료.

이 메소드도 쓰지말래 좀 다른거 써라..
*/

/*
  위의 코드에서는 함수를 호출할 때마다 파라미터로 함수를 전달하고 있다.
  함수안의 함수가 있는 형태이므로 함수의 호출 순서가 중요하다.
  호출 순서는 open -> write -> close 다!