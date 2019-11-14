// process 객체에 tick를 이벤트 이름으로 하는 리스너 생성
process.on("tick", function(count){
	console.log("tick 이벤트 발생함 : %s", count);
});

setTimeout(function(){
	console.log("2초 후에 tick 이벤트 전달");

	process.emit("tick","2");	// emit() 메소드를 이용하여 tick 이벤트 전달
},2000);

/* 결과값
2초 후에 tick 이벤트 전달
tick 이벤트 발생함 : 2
*/

/*
tick 이벤트를 직접 만들고 emit() 메소드를 통해 process객체에 tick 이벤트를 전달했다.
on() 메소드로 tick 이벤트를 등록하고 emit() 메소드를 통해 tick 이벤트를 전달하면 on() 메소드에 등록된
콜백 함수가 실행된다.
/*
