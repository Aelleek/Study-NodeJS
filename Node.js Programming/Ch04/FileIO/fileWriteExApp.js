// 파일 핸들링을 위한 fs 모듈객체 생성.
var fs = require("fs");

// inputData.txt에서 동기식으로 데이터 읽어오기.
var syncInputData = "동기식 파일입출력 입니다.\n" + fs.readFileSync("./inputData.txt","utf8");

// outputSyncData.txt에 동기식으로 데이터 쓰기.
fs.writeFileSync("./outputSyncData.txt",syncInputData);

console.log("outputSyncData.txt에 동기식으로 데이터 쓰기 완료.");

// inputData.txt에서 비동기식으로 파일을 읽어오고, 비동기식으로 outputData.txt에 데이터 쓰기
fs.readFile("./inputData.txt","utf8",function(err, data){
	var inputData = "비동기식 파일입출력 입니다.\n" + data;

	fs.writeFile("./outputData.txt", inputData, function(err){
		if(err){
			console.log("Error : " + err);
		}

		console.log("outputData.txt에 비동기식으로 데이터 쓰기 완료.");
	});
});


/* 결과값
outputSyncData.txt에 동기식으로 데이터 쓰기 완료.
outputData.txt에 비동기식으로 데이터 쓰기 완료.
*/