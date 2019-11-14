// process 객체에 이벤트 이름을 exit로 하는 리스너 설정.
process.on("exit", function(){
	console.log("exit 이벤트 발생");
});

setTimeout(function(){
	console.log("2초 후에 시스템 종료 시도");

	process.exit();		// exit 이벤트 발생.
}, 2000);

/* 결과값
2초 후에 시스템 종료 시도
exit 이벤트 발생
*/

/*
 process 객체는 노드에서 언제든지 사용할 수 있는 객체로 내부적으로 EventEmitter를 상속받도록 만들어져 있어서
 on() 메소드와 emit() 메소드를 바로 사용할 수 있다.

 process객체의 on() 메소드로 이벤트 이름을 exit로 지정하면 프로세스가 종료되는 때를 알 수 있다.