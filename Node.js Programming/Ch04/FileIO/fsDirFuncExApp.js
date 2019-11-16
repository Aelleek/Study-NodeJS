var fs = require("fs");

fs.mkdir("./docs", 0666, function(err){
	if(err) throw err;
	console.log("새로운 docs 폴더를 만든다.");

	fs.rmdir("./docs", function(err){
		if(err) throw err;
		console.log("docs 폴더를 삭제한다.");
	});
});

/* 결과값
새로운 docs 폴더를 만든다.
docs 폴더를 삭제한다.
*/