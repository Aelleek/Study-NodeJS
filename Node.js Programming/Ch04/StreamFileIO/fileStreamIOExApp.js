var fs = require("fs");

var infile = fs.createReadStream("./inputData.txt", {flags : "r"});
var outfile = fs.createWriteStream("./outputData.txt", {flags : "w"});

infile.on("data", function(data){
	console.log("읽어 들인 데이터 : %s", data);
	outfile.write(data);
});

infile.on("end", function(){
	console.log("파일 읽기 종료.");
	outfile.end(function(){
		console.log("파일 쓰기 종료.");
	});
});

/* 결과값

읽어 들인 데이터 : 파일을 읽을때 사용하기 위한 Test Data 입니다.
파일 읽기 종료.
파일 쓰기 종료.

*/