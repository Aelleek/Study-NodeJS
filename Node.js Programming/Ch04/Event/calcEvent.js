var util = require("util");
var EventEmitter = require("events").EventEmitter;

var Calc = function(){
	var self = this;

	this.on("stop", function(){
		console.log("Calc에 stop event 전달됨");
	});
};

util.inherits(Calc, EventEmitter);

Calc.prototype.add = function(a,b){
	return a+b;
}

module.exports = Calc;
module.exports.title = "calculator";



/* var self = this 구문
 this.txt 참조.
 이 예제에서는 정의만 하고 사용하지는 않지만, 노드JS에서 자주 사용하는 코드인거 같다.
 지금 예제에서는 함수를 복잡하게 호출하지 않기 때문에 사용하지 않지만 호출이 복잡해지면 this와 구분하기 위해 사용하는 것 같다.
 */