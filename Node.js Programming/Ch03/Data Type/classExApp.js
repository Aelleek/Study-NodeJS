console.log('클래스 정의하는 방법');

var Person = {
	age : 29,
	name : '이경원',
	add : function(a,b){
		return a+b;
	}
};

console.log('더하기 : %d', Person.add(10,10));