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
 이 예제에서는 정의만 하고 사용하지는 않지만, 노드JS에서 기본적으로 작성하는 코드인거 같다.
 지금 예제에서는 함수를 복잡하게 호출하지 않기 때문에 사용하지 않지만 호출이 복잡해지면 this와 구분하기 위해 사용하는 것 같다.
*/

/* 
util.inherits(constructor, superConstructor)
inherits(상속받을 객체, 상속하는 객체)

노드js에서는 상속을 하기위해 util 모듈의 inherits() 메소드를 사용한다.
이때 주의할 점은 inherits() 메소드를 사용했다고 해서 상속받을 객체가 상속된 상태가 아니고
객체 생성을 해야지 상속이 완료된다.

?? 근데 on 메소드는 EventEmitter 에 있다는거 아니야? 12라인에서 상속받는데 7라인에서 on() 메소드 사용하잖아?
이상한디?
----> 아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ
위의 예제의 형태는 Calc 객체에 on() 메소드를 정의를 해놓은 상태에서 12라인에서 inherits로 EventEmitter 객체를 상속받으면
on() 메소드의 형태가 같으니까 오버라이딩 되는 상황인거 같다.

** 하지만 이제 NodeJS에서 extends를 사용할 수 있게되면서 inherits() 메소드 사용은 지양하고 있는 거 같다!

/*
var onMethodTest = function(){
	var self = this;

	this.on("test", function(){
		console.log("onMethodTest에 test 이벤트 전달됨");
	});
};

onMethodTest.emit("test");	

이 코드를 실행해보면 on 메소드 자체는 정의가 되므로 Error가 발생하지 않지만 emit()메소드를 호출할때 정의되지 않은 메소드를 호출하므로 에러가 난다.
EventEmitter 객체를 상속받지 않았으므로 원하는대로 동작하지 않는 것!

*/

/*
var onMethodTest = function(){
	var self = this;

	this.on("test", function(){
		console.log("onMethodTest에 test 이벤트 전달됨");
	});
};
util.inherits(onMethodTest, EventEmitter);

var test = new onMethodTest();

test.emit("test");	
*/