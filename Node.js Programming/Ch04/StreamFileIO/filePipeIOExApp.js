var fs = require("fs");

// 읽어올 파일과 쓰기할 파일의 이름을 설정.
var inname = "./inputData.txt";
var outname = "./pipeOutputData.txt";

fs.exists(outname, function(exists){
	// outname과 같은 이름의 파일이 있을 경우 삭제!
	if(exists){
		fs.unlink(outname, function(err){
			if(err) throw err;
			console.log("기존파일 [" + outname + "] 삭제함.");
		});
	}

	var infile = fs.createReadStream(inname, {flags : "r"});
	var outfile = fs.createWriteStream(outname, {flags : "w"});

	infile.pipe(outfile);
	console.log("파일 복사 [" + inname + "] -> [" + outname + "]");
});

/* 결과값
파일 복사 [./inputData.txt] -> [./pipeOutputData.txt]
*/


/*
  infile.pipe(outfile);
  pipe() 메소드를 이용하여 infile과 outfile 두 개의 스트림 객체를 연결하기만 했는데 파일 내용이 복사된다!

  fs.unlink(outname, function());
  기존의 동일한 이름의 파일이 있는 경우, unlink() 메소드를 이용하여 기존의 파일을 삭제한다.
*/