// 파일 핸들링을 위한 fs 모듈객체 생성
var fs = require("fs");

// 파일을 동기식 IO로 읽어들인다.
var syncData = fs.readFileSync("./inputData.txt","utf8");

// 파일을 비동기식IO로 읽어들인다.
fs.readFile("./inputData.txt","utf8",function(err, data){
	console.log("비동기식 파일 입력 결과");
	console.log(data);
});

console.log("동기식 파일 입력 결과");
console.log(syncData);



/* 결과값
동기식 파일 입력 결과
파일을 읽을때 사용하기 위한 Test Data 입니다.
비동기식 파일 입력 결과
파일을 읽을때 사용하기 위한 Test Data 입니다.

8라인에 readfile()의 파라미터로 "utf8"을 쓰지 않으면
<Buffer ed 8c 8c ec 9d bc ec 9d 84 20 ec 9d bd ec 9d 84 eb 95 8c 20 ec 82 ac ec 9a a9 ed 95 98 ea b8 b0 20 ec 9c 84 ed 95 9c 20 54 65 73 74 20 44 61 74 61 20 ... 10 more bytes>
같은 결과값이 출력된다.. 파일을 read할때는 무조건 encoding 타입을 입력할 것!

*/