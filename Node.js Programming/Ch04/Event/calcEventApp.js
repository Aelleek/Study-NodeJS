var Calc = require("./calcEvent.js");

var calc = new Calc();
calc.emit("stop");

console.log(Calc.title + "에 stop 이벤트 전달");

console.log();

var onMethodTest = function(){
	var self = this;

	this.on("test", function(){
		console.log("onMethodTest에 test 이벤트 전달됨");
	});
};

onMethodTest.emit("test");	

/* 결과값
Calc에 stop event 전달됨
calculator에 stop 이벤트 전달
*/
